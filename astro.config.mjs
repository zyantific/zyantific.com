import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	site: 'https://zyantific-blog.vercel.app',
	markdown: {
		drafts: true,
		shikiConfig: {
			theme: JSON.parse(fs.readFileSync('./src/styles/shiki-theme.json', 'utf-8')),
		},
	},
	integrations: [preact(), tailwind(), image(), mdx()],
	vite: {
		ssr: {
			external: ['svgo'],
		},
	},
});
