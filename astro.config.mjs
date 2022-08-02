import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';

import image from '@astrojs/image';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// https://astro.build/config
export default defineConfig({
	integrations: [preact(), tailwind(), image()],
	vite: {
		ssr: {
			external: ['svgo'],
		},
	},
	markdown: {
		drafts: true,
		rehypePlugins: ['rehype-slug', ['rehype-autolink-headings', { behavior: 'append' }]],
	},
});
