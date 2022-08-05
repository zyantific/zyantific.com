import type { Author, NavItems } from '@types';

export const NAV_ITEMS: NavItems = {
	zydis: {
		title: 'Zydis',
		href: 'https://zydis.re/',
	},
	projects: {
		title: 'Other Projects',
		href: '/projects',
	},
};

export const SITE = {
	title: 'zyantific | zyantific team development blog',
	description: 'zyantific team development blog',
	url: 'https://zyantific.com',
	github: 'https://github.com/zyantific',
	image: 'https://zyantific.com/images/logo.png',
};

export const Authors: { [key: string]: Author } = {
	joel: {
		name: 'Joel Höner',
		bio: 'meow',
		avatar: '/src/assets/avatars/joel.png',
		twitter: 'athre0z',
		github: 'athre0z',
	},
};
