import { LinkedinLogo, List, X } from "phosphor-react";
import { useContext } from "react";
import { MenuMobileContext } from "../../contexts/MenuMobileContext";
import { HeaderContainer } from "./headerStyle";
import { MenuMobile } from './MenuMobile/MenuMobile';

export function Header() {
    const {menuMobileOpen, setMenuMobileOpen} = useContext(MenuMobileContext);

    return (
        <HeaderContainer>
            <div id="logo">
                <div>Meu</div>
                <div>Portifólio</div>
            </div>
            <ul id="menuDesktop">
                <a href="#home" className="navigationInside">
                    HOME
                </a>
                <a href="#tecnologias" className="navigationInside">
                    TECNOLOGIAS
                </a>
                <a href="#projetos" className="navigationInside">
                    PROJETOS
                </a>
                <a href="#">
                    <LinkedinLogo size={30} weight={"bold"} color="#5ff" />
                </a>
            </ul>
            <a href="#linkedIn" id="whatsAppDesktop">Let's Connect</a>
            {
                menuMobileOpen ? (
                    <X size={30} id="closeMenuList" onClick={() => setMenuMobileOpen(false)} />
                ) : (
                    <List size={30} id="menuList" onClick={() => setMenuMobileOpen(true)} />
                )
            }
            <MenuMobile menuMobileOpen={menuMobileOpen} />
        </HeaderContainer>
    );
}