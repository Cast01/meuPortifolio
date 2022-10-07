import styled from 'styled-components';

export const TecnologiesContainer = styled.div`
    width: 100%;
    padding: 15px;
    padding-bottom: 70px;
    background: #121212;

    h1 {
        font-family: 'Silkscreen',cursive;
        color: #92f5ff;
        text-shadow: 0 0 5px #00e7ff, 0 0 10px #00e7ff, 0 0 20px #00e7ff, 0 0 40px #00e7ff;
        margin-bottom: 30px;
    }

    .alice-carousel__stage {
        li {
            &:nth-child(1) {
                div {
                    #NameContainer {
                        #Name {
                            color: #ffbc9f;
                            text-shadow: 0 0 5px #ff996d, 0 0 10px #ff996d, 0 0 20px #ff996d, 0 0 40px #ff996d;
                        }
                    }
                }
            }
            &:nth-child(2) {
                div {
                    #NameContainer {
                        #Name {
                            color: #82b3cb;
                            text-shadow: 0 0 5px #039ae4, 0 0 10px #039ae4, 0 0 20px #039ae4, 0 0 40px #039ae4;
                        }
                    }
                }
            }
            &:nth-child(3) {
                div {
                    #NameContainer {
                        #Name {
                            color: #fff6b9;
                            text-shadow: 0 0 5px #ffef83, 0 0 10px #ffef83, 0 0 20px #ffef83, 0 0 40px #ffef83;
                        }
                    }
                }
            }
        }
    }
`;