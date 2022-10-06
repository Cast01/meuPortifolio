import { ApresentationContainer } from "./apresentationStyle";
import spaceBg from '../../assets/banner-bg.png';
import astronaut from '../../assets/astronaut-img.svg';
import { Typewriter } from "react-simple-typewriter";

export function Apresentation() {
    return (
        <ApresentationContainer>
            <img src={spaceBg} alt="" id="spaceBackground" />
            <div id="DescriptionBox">
                <div id="Description">
                    <strong>Bem vindo ao meu portifólio</strong>
                    <h1>
                        Olá, sou Gabriel.&nbsp;
                        <Typewriter words={['Desenvolvedor Front-End.']} />
                        <span id="FlashingStraightBar">|</span>
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tempore odio maiores illo ullam quis harum incidunt qui? Repellendus aliquid earum soluta consectetur quo voluptatem maxime praesentium eaque laudantium impedit.</p>
                    <a href="#WhatsApp">Let's Connect</a>
                </div>
            </div>
            <div id="AstronautBox">
                <img src={astronaut} alt="" id="Astronaut" />
            </div>
        </ApresentationContainer>
    );
}