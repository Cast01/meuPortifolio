import { LinkedinLogo } from 'phosphor-react';
import { MenuMobileContainer } from './menuMobileStyle';

export interface MenuMobileProps {
    menuMobileOpen: boolean;
}

export function MenuMobile({menuMobileOpen}: MenuMobileProps) {
    return (
        <MenuMobileContainer menuMobileOpen={menuMobileOpen}>
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
            <a href="#linkedIn" id="whatsAppMobile">Let's Connect</a>
        </MenuMobileContainer>
    );
}