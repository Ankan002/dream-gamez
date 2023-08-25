import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"primary-dark": "#292B35",
				"primary-gray": "#D9D9D9",
				"primary-golden": "#A18150",
				"primary-light-gray": "#f7f2f2",
				"primary-yellow": "#F9DD9C"
			},
			fontFamily: {
				oxanium: "'Oxanium', cursive",
				quicksand: "'Quicksand', sans-serif",
				poppins: "'Poppins', sans-serif",
			},
			backgroundImage: {
				"home-hero-bg": "url('/images/home-hero-bg.png')",
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["light"],
		darkTheme: "light",
	},
};
export default config;
