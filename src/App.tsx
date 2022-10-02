import { useContext } from "react";
import { AppContainer } from "./appStyle"
import { Header } from "./components/Header/Header"
import { MenuMobileContext } from "./contexts/MenuMobileContext";

import { Apresentation } from "./components/Apresentation/Apresentation";

function App() {
  const {menuMobileOpen} = useContext(MenuMobileContext);

  return (
    <AppContainer menuMobileOpen={menuMobileOpen}>
      <Header />
      <Apresentation />
    </AppContainer>
  )
}

export default App
