import type { DefaultTheme } from "styled-components"

const PRIMARY_COLOR = "#0da170";
const DEFAULT_COLOR = "#e6e9f0";
const HOVER_COLORS = {
	primary: "#128961",
	neutral: "rgba(255,255,255,0.018)"
};
const DISABLED_COLOR = "#aab3cc";

const darkTheme: DefaultTheme = {
	text: {
		primary: PRIMARY_COLOR,
		default: DEFAULT_COLOR,
		hover: HOVER_COLORS,
		disabled: "#aab3cc"
	},
	background: {
		page: `linear-gradient(
			to top,
			rgba(10, 15, 26, 1) 0%,
			rgb(42, 43, 55) 100%
		)`,
		primary: PRIMARY_COLOR,
		neutral: {
			100: "#e6e9f0",
			200: "#cdd3e1",
			300: "#aab3cc",
			400: "#555f7d",
			500: "#454f6a",
			600: "#363d56",
			700: "#272f43",
			800: "#181f2e",
			900: "#121723"
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
			default: "#121723",
			hover: HOVER_COLORS,
			disabled: DISABLED_COLOR
		},
		stroke: {
			1: "0.22rem",
			2: "0.28rem"
		}
	}
};

export default darkTheme;