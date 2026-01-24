import type AppTheme from "@/styles/themes/AppTheme";

const DEFAULT_WHITE = "#e6e9f0";

const darkTheme: AppTheme = {
	name: "Dark",
	colors: {
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
		icon: DEFAULT_WHITE
	}
};

export default darkTheme;