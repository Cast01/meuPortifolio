import styled from "styled-components";

export const ApresentationContainer = styled.main`
    width: 100%;
    height: 100vh;
    position: relative;
    padding-top: 60px;

    #spaceBackground {
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    #Content {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        #astronaut {
            width: 100%;
            position: relative;

            animation: astronaut 10s infinite linear;

            @keyframes astronaut {
                0% {
                    top: 0px;
                }

                25% {
                    top: 20px;
                }

                50% {
                    top: 0px;
                }

                75% {
                    top: -20px;
                }

                100% {
                    top: 0;
                }
            }
        }
    }
`;