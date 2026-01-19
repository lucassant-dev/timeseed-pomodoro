import type { DefaultTheme } from "styled-components"

const PRIMARY_COLOR = "#0ad491";
const DEFAULT_COLOR = "#000000e7";
const HOVER_COLORS = {
	primary: "#1cbe88",
	neutral: "rgba(0,0,0,0.08)"
};
const DISABLED_COLOR = "#aab3cc";

const lightTheme: DefaultTheme = {
	text: {
		primary: PRIMARY_COLOR,
		default: DEFAULT_COLOR,
		hover: HOVER_COLORS,
		disabled: DISABLED_COLOR
	},
	background: {
		page: `linear-gradient(
			to top,
			rgb(255, 255, 255) 0%,
			rgba(199, 205, 217, 1) 100%
		)`,
		primary: PRIMARY_COLOR,
		neutral: {
			100: "#0a0f1a",
			200: "#181f2e",
			300: "#272f43",
			400: "#363d56",
			500: "#454f6a",
			600: "#555f7d",
            700: "#aab3cc",
            800: "#cdd3e1",
			900: "#dce0e9"
		},
        hover: HOVER_COLORS,
		status: {
			success: "#22c55e",
			warning: "#eab308",
			error: "#991b1b",
			danger: "rgb(238, 77, 77)",
			info: "#0ea5e9"
		},
		disabled: "#555f7d"
	},

	border: {
		primary: PRIMARY_COLOR,
		default: DEFAULT_COLOR,
		disabled: "#555f7d"
	},

	icon: {
		color: {
			primary: PRIMARY_COLOR,
			default: "#dce0e9",
			hover: HOVER_COLORS,
			disabled: DISABLED_COLOR
		},
		stroke: {
			1: "0.28rem",
			2: "0.4rem"
		}
	}
};

export default lightTheme;