import { useContext } from "react";
import { AppContainer } from "./appStyle"
import { Header } from "./components/Header/Header"
import { MenuMobileContext } from "./contexts/MenuMobileContext";

import { Apresentation } from "./components/Apresentation/Apresentation";
import { Tecnologies } from "./components/Tecnologies/Tecnologies";

function App() {
  const {menuMobileOpen} = useContext(MenuMobileContext);

  return (
    <AppContainer menuMobileOpen={menuMobileOpen}>
      <Header />
      <Apresentation />
      <Tecnologies />
    </AppContainer>
  )
}

export default App
