import { ThemeProvider } from "styled-components";
import { lightTheme } from "@/styles/themes";
import Container from "@/components/container";
import Logo from "@/components/logo";
import Menu from "@/components/menu";
import Timer from "@/components/timer";
import Form from "@/components/form";
import GlobalStyle from "./styles/global";

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
		<GlobalStyle />

		<Container>
			<Logo/>
		</Container>

		<Container>
			<Menu/>
		</Container>

		<Container>
			<Timer />
		</Container>

		<Container>
			<Form />
		</Container>
	</ThemeProvider>
  );
}