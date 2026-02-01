import Home from "@/pages/Home";
import { AppThemeProvider } from "@/contexts/appThemeContext";
import GlobalStyle from "./styles/global";

export default function App() {
	return (
		<AppThemeProvider>
			<GlobalStyle />
			<Home />
		</AppThemeProvider>
	);
}