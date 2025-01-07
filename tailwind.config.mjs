/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'open-sans': ['OpenS', 'sans-serif'],
				'raleway': ['Raleway', 'sans-serif'],
			},
			colors: {
				'primary': '#204CCF',
				'secondary': '#FFA500',
				'secondary-1': '#4C20CF',
			},
		},
	},
	plugins: [],
}
