import type AppTheme from "@/styles/themes/AppTheme";

const DEFAULT_BLACK = "#000000e7"

const lightTheme: AppTheme = {
	name: "Light",
	colors: {
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
		icon: "#e6e9f0"
	}
};

export default lightTheme;