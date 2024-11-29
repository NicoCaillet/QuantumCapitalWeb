/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		screens: {
			'mo': { max: '850px' },
			'xl': '1290px'
		}
	},
	plugins: [require('tailwind-hamburgers')],
}
