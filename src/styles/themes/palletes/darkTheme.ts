import type AppTheme from "@/styles/themes/AppTheme";

const DEFAULT_WHITE = "#e6e9f0";

const darkTheme: AppTheme = {
	name: "Dark",
	colors: {
		primary: "#0da170",
		text: DEFAULT_WHITE,
		icon: "#ffff",
		menu: "#181f2e",
		contrast: DEFAULT_WHITE,
		backgroundBottom: `rgba(10, 15, 26, 1)`,
		backgroundTop: `rgb(42, 43, 55)`
	}
};

export default darkTheme;