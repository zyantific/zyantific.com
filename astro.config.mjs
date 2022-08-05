import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	markdown: {
		drafts: true,
	},
	integrations: [preact(), tailwind(), image(), mdx()],
	vite: {
		ssr: {
			external: ['svgo'],
		},
	},
});
