import GlobalStyle from "./styles/global";
import { AppThemeProvider } from "@/contexts/appThemeContext/provider";
import Actions from "@/components/actions";
import Heading from "@/components/heading";
import Container from "@/components/container";
import ThemeSelector from "@/components/themeSelector";

export default function App() {
	return (
		<AppThemeProvider>
			<GlobalStyle />

			<Container>
				<Heading />
			</Container>

			<Container>
				<ThemeSelector />
			</Container>

			{/* <Container>
				<Actions />
			</Container> */}

		</AppThemeProvider>
	);
}