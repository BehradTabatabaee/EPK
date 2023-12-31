/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,jsx}",
		"./components/**/*.{js,jsx}",
		"./app/**/*.{js,jsx}",
		"./src/**/*.{js,jsx}",
	],
	theme: {
		screens: {
			// DONT USE THESE ! PLEASE, FOR UR OWN SANITY's SAKE! DONT USE THESE
			fold: "280px",
			sfold: "281px",
			xfold: "300px",
			xsfold: "320px",
			xssfold: "326px",
			xxfold: "412px",
			xs: "420px",
			xxs: "500px",
			xxss: "510px",
			xxxs: "512px",
			xxxxs: "540px",
			sm: "640px",
			xsm : "700px",
			S8 : "740px",
			md: "768px",
			xmd: "820px",
			air : "821px",
			xxmd: "892px",
			surface: "912px",
			A51 : "914px",
			lg: "1024px",
			xl: "1280px",
			xxl: "1440px",
			"2xl": "1536px",
			pc: "1920px",
			xpc: "2560px",
		},
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			keyframes: {
				"accordion-down": {
					from: { height: 0, padding: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0, padding: 0 },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.3s ease-out",
				"accordion-up": "accordion-up 0.3s ease-out",
			},
		},
		fontFamily: {
			sans: ["var(--font-sans)"],
			ghasem: ["var(--font-ghasem)"],
			vazir: ["var(--font-vazir)"],
			delius: ["var(--font-delius)"],
		},
	},
	plugins: [require("tailwindcss-animate")],
};
