import { CarouselItemContainer } from "./carouselItemStyle";

interface CaouselItemProps {
    name: string;
    image: string;
}

export function CarouselItem({name, image}: CaouselItemProps) {
    return (
        <CarouselItemContainer>
            <div id="ImageContainer">
                <img src={image} alt="" />
            </div>
            <div id="NameContainer">
                <div id="Name">{name}</div>
            </div>
        </CarouselItemContainer>
    );
}