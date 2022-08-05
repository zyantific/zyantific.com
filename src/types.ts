export type NavItems = {
	[key: string]: NavItem;
};

export type NavItem = {
	title: string;
	href: string;
};

export type Author = {
	name: string;
	bio: string;
	avatar: string;
	twitter: string;
	github: string;
};
export interface Heading {
	depth: number;
	slug: string;
	text: string;
}
