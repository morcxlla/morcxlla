/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#ddd',
			},
			borderColor: {
				'primary': '#373737',
			},
		},
	},
	plugins: [],
}
