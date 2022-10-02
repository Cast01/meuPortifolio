import { ApresentationContainer } from "./apresentationStyle";
import spaceBg from '../../assets/banner-bg.png';
import astronaut from '../../assets/astronaut-img.svg';

export function Apresentation() {
    return (
        <ApresentationContainer>
            <img src={spaceBg} alt="" id="spaceBackground" />
            <div id="Content">
                <img src={astronaut} alt="" id="astronaut" />
            </div>
        </ApresentationContainer>
    );
}