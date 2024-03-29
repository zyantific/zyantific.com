import type { FunctionalComponent } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';
import './TableOfContents.css';

interface Props {
	headings: { depth: number; slug: string; text: string }[];
	labels?: {
		onThisPage: string;
	};
	isMobile?: boolean;
}

const TableOfContents: FunctionalComponent<Props> = ({ headings = [], labels = { onThisPage: 'Table of Contents' }, isMobile }) => {
	interface Props {
		children: any;
	}

	headings = [...headings].filter(({ depth }) => depth > 1 && depth < 4);
	const toc = useRef<HTMLUListElement>();
	const [currentID, setCurrentID] = useState(headings[0]?.slug);
	const [open, setOpen] = useState(!isMobile);
	const onThisPageID = 'on-this-page-heading';

	const Container = ({ children }: Props) => {
		return isMobile ? (
			<details {...{ open }} onToggle={(e: { target: any }) => setOpen(e.target!.open)} class="toc-mobile-container">
				{children}
			</details>
		) : (
			children
		);
	};

	const HeadingContainer = ({ children }: Props) => {
		const currentHeading = headings.find(({ slug }) => slug === currentID);
		return isMobile ? (
			<summary class="toc-mobile-header">
				<div class="toc-mobile-header-content">
					<div className="toc-toggle">
						{children}
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 16 16" width="16" height="16" aria-hidden="true">
							<path fill-rule="evenodd" d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"></path>
						</svg>
					</div>
					{!open && currentHeading?.slug !== 'overview' && <span class="toc-current-heading">{currentHeading?.text || ''}</span>}
				</div>
			</summary>
		) : (
			children
		);
	};

	useEffect(() => {
		if (!toc.current) return;

		const setCurrent: IntersectionObserverCallback = (entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					const { id } = entry.target;
					if (id === onThisPageID) continue;
					setCurrentID(entry.target.id);
					break;
				}
			}
		};

		const observerOptions: IntersectionObserverInit = {
			// Negative top margin accounts for `scroll-margin`.
			// Negative bottom margin means heading needs to be towards top of viewport to trigger intersection.
			rootMargin: '-20px 0px -66% 0px',
			threshold: 1,
		};

		const headingsObserver = new IntersectionObserver(setCurrent, observerOptions);

		// Observe all the headings in the main page content.
		document.querySelectorAll('article :is(h2,h3)').forEach((h) => headingsObserver.observe(h));

		// Stop observing when the component is unmounted.
		return () => headingsObserver.disconnect();
	}, [toc.current]);

	const onLinkClick = (e: { target: { getAttribute: (arg0: string) => string } }) => {
		if (!isMobile) return;
		setOpen(false);
		setCurrentID(e.target.getAttribute('href').replace('#', ''));
	};

	return (
		<Container>
			<HeadingContainer>
				<h2 class="heading" id={onThisPageID}>
					{labels.onThisPage}
				</h2>
			</HeadingContainer>
			<ul ref={toc}>
				{headings.map(({ depth, slug, text }) => (
					<li class={`header-link depth-${depth} ${currentID === slug ? 'current-header-link' : ''}`.trim()}>
						<a href={`#${slug}`} onClick={onLinkClick}>
							{text}
						</a>
					</li>
				))}
			</ul>
		</Container>
	);
};

export default TableOfContents;
