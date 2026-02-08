import type AppTheme from "@/styles/themes/AppTheme";

const DEFAULT_BLACK = "#181f2e";
const DEFAULT_WHITE = "#e6e9f0";

const darkTheme: AppTheme = {
	name: "Dark",
	colors: {
		primary: "#0da170",
		
		text: {
			default: DEFAULT_WHITE,
			contrast: DEFAULT_BLACK
		},

		icon: "#ffff",

		menu: {
			default: DEFAULT_BLACK,
			contrast: DEFAULT_WHITE
		},

		background: {
			top: `rgb(42, 43, 55)`,
			bottom: `rgba(10, 15, 26, 1)`
		}
	}
};

export default darkTheme;