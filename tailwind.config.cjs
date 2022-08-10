/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		colors: {
			// Brand Colors
			brand: '#11E2FF',
			'brand-darker': '#1DABE8',
			// System Colors
			red: '#EF4444',
			green: '#22C55E',
			blue: '#01D0FF',
			yellow: '#FFBA08',
			white: '#FFFFFF',
			link: '#117EFF',
			'text-faded': '#9397AD',
			// Light-Mode Colors
			'lm-heading': '#131022',
			'lm-background': '#FBFBFB',
			'lm-card-outline': '#3E4265',
			'lm-header-text': '#3E4265',
			'lm-logo': '#3E4265',
			'lm-body': '#484D6C',
			'lm-faded': '#FFFFFF',
			'lm-code-bg': '#dedede',
			// Dark-Mode Colors
			'dm-heading': '#FFFFFF',
			'dm-card-outline': '#FFFFFF',
			'dm-background': '#131723',
			'dm-header-text': '#E2E5F1',
			'dm-logo': '#FFFFFF',
			'dm-body': '#D4D7E5',
			'dm-faded': '#191E2C',
			'dm-code-bg': '#191E2C',
			'dm-article-body': '#babed1',
		},
		// fontFamily: {
		// 	sans: ['ui-sans-serif', 'system-ui'],
		// },
		extend: {
			typography: ({ theme }) => ({
				custom: {
					css: {
						'--tw-prose-body': theme('colors.lm-body'),
						'--tw-prose-headings': theme('colors.lm-heading'),
						'--tw-prose-lead': theme('colors.brand'),
						'--tw-prose-links': theme('colors.dm-background'),
						'--tw-prose-bold': theme('colors.lm-heading'),
						'--tw-prose-counters': theme('colors.lm-body'),
						'--tw-prose-bullets': theme('colors.lm-body'),
						'--tw-prose-hr': theme('colors.lm-body'),
						'--tw-prose-quotes': theme('colors.lm-body'),
						'--tw-prose-quote-borders': theme('colors.brand-darker'),
						'--tw-prose-captions': theme('colors.lm-body'),
						'--tw-prose-code': theme('colors.lm-body'),
						'--tw-prose-code-bg': theme('colors.lm-code-bg'),
						'--tw-prose-link-border': theme('colors.brand-darker'),
						// '--tw-prose-pre-code': theme('colors.orange[100]'),
						// '--tw-prose-pre-bg': theme('colors.orange[900]'),
						// '--tw-prose-th-borders': theme('colors.orange[300]'),
						// '--tw-prose-td-borders': theme('colors.orange[200]'),
						// '--tw-format-th-bg': theme('colors.orange[50]'),
					},
				},
				'custom-invert': {
					css: {
						//copy above but remove "-invert-"
						'--tw-prose-body': theme('colors.dm-article-body'),
						'--tw-prose-headings': theme('colors.dm-heading'),
						'--tw-prose-lead': theme('colors.dm-heading'),
						'--tw-prose-links': theme('colors.dm-heading'),
						'--tw-prose-bold': theme('colors.dm-heading'),
						'--tw-prose-counters': theme('colors.dm-heading'),
						'--tw-prose-bullets': theme('colors.dm-heading'),
						'--tw-prose-hr': theme('colors.dm-heading'),
						'--tw-prose-quotes': theme('colors.dm-article-body'),
						'--tw-prose-quote-borders': theme('colors.brand'),
						'--tw-prose-captions': theme('colors.dm-heading'),
						'--tw-prose-code': theme('colors.text-faded'),
						'--tw-prose-code-bg': theme('colors.dm-code-bg'),
						'--tw-prose-link-border': theme('colors.brand'),
						// '--tw-prose-pre-code': theme('colors.orange[100]'),
						// '--tw-prose-pre-bg': theme('colors.orange[900]'),
						// '--tw-prose-th-borders': theme('colors.orange[300]'),
						// '--tw-prose-td-borders': theme('colors.orange[200]'),
						// '--tw-format-th-bg': theme('colors.orange[50]'),
					},
				},
				DEFAULT: {
					css: {
						a: {
							// color: theme('colors.white'),
							fontWeight: 'bold',
							textDecoration: 'none',
							borderBottomWidth: '1px',
							borderBottomStyle: 'solid',
							borderBottomColor: 'var(--tw-prose-link-border)',
							'&:hover': {
								borderBottomWidth: '2px',
							},
						},
						code: {
							borderRadius: '4px',
							backgroundColor: 'var(--tw-prose-code-bg)',
						},
						hr: {
							borderColor: 'var(--tw-prose-hr)',
						},
						pre: {
							fontSize: '1rem',
						},
					},
				},
				sm: {
					css: {
						pre: {
							fontSize: '1rem',
						},
					},
				},
				md: {
					css: {
						pre: {
							fontSize: '1rem',
						},
					},
				},
				lg: {
					css: {
						pre: {
							fontSize: '1rem',
						},
					},
				},
				base: {
					css: {
						pre: {
							fontSize: '1rem',
						},
					},
				},
			}),
		},
	},
	plugins: [require('daisyui'), require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
	daisyui: {
		themes: [],
	},
};

// Credit Card Number: 5235 2905 5037 6639
// Expiration Date: 08/29
// CVC: 907
// Name On The Card: Emir Arcan Polat
