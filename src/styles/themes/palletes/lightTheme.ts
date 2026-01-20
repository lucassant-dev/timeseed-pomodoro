import type { DefaultTheme } from "styled-components"

const DEFAULT_BLACK = "#000000e7"

const lightTheme: DefaultTheme = {
	primary: {
		default: "#0ad491",
		hover: "#1cbe88"
	},

	background: {
		default: "#eaeaec",
		contrast: DEFAULT_BLACK,
		hover: "#e8ecf4",
		disabled: "#a1a7ba"
	},
	
	page: `linear-gradient(
		to top,
		rgb(255, 255, 255) 0%,
		rgba(199, 205, 217, 1) 100%
	)`,

	text: DEFAULT_BLACK,
	icon: "#e6e9f0",
};

export default lightTheme;


// 100: "#0a0f1a",
// 200: "#181f2e",
// 300: "#272f43",
// 400: "#363d56",
// 500: "#454f6a",
// 600: "#555f7d",
// 700: "#aab3cc",
// 800: "#cdd3e1",
// 900: "#dce0e9"