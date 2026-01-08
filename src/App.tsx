import "@/styles/theme.css";
import "@/styles/global.css";

import Container from "@/components/container/Container";
import Logo from "@/components/logo/Logo";
import Menu from "@/components/menu/Menu";

function App() {
  return (
    <>
		<Container>
			<Logo/>
		</Container>
		<Container>
			<Menu/>
		</Container>
    </>
  );
}

export default App
