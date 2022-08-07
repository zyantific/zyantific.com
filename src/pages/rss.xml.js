import rss from '@astrojs/rss';

export const get = () =>
	rss({
		// `<title>` field in output xml
		title: 'Zyantific Team Development Blog',
		// `<description>` field in output xml
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		// base URL for RSS <item> links
		// SITE will use "site" from your project's astro.config.
		site: import.meta.env.SITE,
		// list of `<item>`s in output xml
		// simple example: generate items for every md file in /src/pages
		// see "Generating items" section for required frontmatter and advanced use cases
		items: import.meta.glob('./posts/*.mdx'),
		// (optional) inject custom xml
		customData: `<language>en-us</language>`,
		stylesheet: '/rss/styles.xsl',
	});
