import styled from "styled-components";

interface AppContainerTypes {
    menuMobileOpen: boolean;
}

export const AppContainer = styled.div`
    min-height: 100vh;
    min-width: 100%;
    max-width: 1300px;
    position: ${({menuMobileOpen}: AppContainerTypes) => menuMobileOpen ? "fixed" : "static"};
`;