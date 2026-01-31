import GlobalStyle from "./styles/global";
import { AppThemeProvider } from "@/contexts/appThemeContext";
import Actions from "@/components/actions";
import Heading from "@/components/heading";
import Container from "@/components/container";
import ThemeSelector from "@/components/themeSelector";
import ThemeCreator from "@/components/themeCreator";

export default function App() {
		return (
		<AppThemeProvider>
			<GlobalStyle />

			<Container>
				<Heading />
			</Container>

			<Container>
				<ThemeCreator />
			</Container>

			{/* <Container>
				<ThemeSelector />
			</Container> */}

			{/* <Container>
				<Actions />
			</Container> */}

		</AppThemeProvider>
	);
}