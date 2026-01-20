import type { DefaultTheme } from "styled-components"

const DEFAULT_WHITE = "#e6e9f0";

const darkTheme: DefaultTheme = {
	primary: {
		default: "#0da170",
		hover: "#128961"
	},

	background: {
		default: "#181f2e",
		contrast: DEFAULT_WHITE,
		hover: "#161f2d",
		disabled: "#aab3cc"
	},

	page: `linear-gradient(
		to top,
		rgba(10, 15, 26, 1) 0%,
		rgb(42, 43, 55) 100%
	)`,

	text: DEFAULT_WHITE,
	icon: DEFAULT_WHITE,
	
};

export default darkTheme;


// 100: "#e6e9f0",
// 200: "#cdd3e1",
// 300: "#aab3cc",
// 400: "#555f7d",
// 500: "#454f6a",
// 600: "#363d56",
// 700: "#272f43",
// 800: "#181f2e",
// 900: "#121723"