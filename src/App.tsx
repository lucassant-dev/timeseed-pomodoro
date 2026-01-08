import "@/styles/theme.css";
import "@/styles/global.css";

import Container from "@/components/container/Container";
import Logo from "@/components/logo/Logo";
import Menu from "@/components/menu/Menu";
import Timer from "@/components/timer/Timer";

function App() {
  return (
    <>
		<Container>
			<Logo/>
		</Container>
		<Container>
			<Menu/>
		</Container>
		<Container>
			<Timer />
		</Container>
    </>
  );
}

export default App
