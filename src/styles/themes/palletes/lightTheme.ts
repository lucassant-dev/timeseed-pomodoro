import type AppTheme from "@/styles/themes/AppTheme";

const DEFAULT_WHITE = "#eaeaec";
const DEFAULT_BLACK = "#000000e7";

const lightTheme: AppTheme = {
	name: "Light",
	colors: {
		primary: "#0ad491",

		text: {
			default: DEFAULT_BLACK,
			contrast: DEFAULT_WHITE
		},

		icon: "#ffffff",
		
		menu: {
			default: DEFAULT_WHITE,
			contrast: DEFAULT_BLACK
		},

		background: {
			top: "rgba(199, 205, 217, 1)",
			bottom: "rgb(255, 255, 255)"
		}
	}
};

export default lightTheme;