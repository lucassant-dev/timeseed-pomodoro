import { AppThemeProvider } from "@/contexts/appThemeContext";
import GlobalStyle from "@/styles/global";
import Home from "@/pages/Home";

export default function App() {
	return (
		<AppThemeProvider>
			<GlobalStyle />
			<Home />
		</AppThemeProvider>
	);
}