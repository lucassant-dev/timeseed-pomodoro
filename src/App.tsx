import GlobalStyle from "./styles/global";
import { AppThemeProvider } from "@/contexts/AppThemeContext";
import Actions from "@/components/actions";
import Heading from "@/components/heading";
import Container from "@/components/container";

export default function App() {
	return (
		<AppThemeProvider>
			<GlobalStyle />

			<Container>
				<Heading />
			</Container>

			<Container>
				<Actions />
			</Container>

		</AppThemeProvider>
	);
}