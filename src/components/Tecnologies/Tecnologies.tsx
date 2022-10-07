import { TecnologiesContainer } from "./tecnologiesStyle";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './aliceCarouselStyleCSS/style.css'
import { CarouselItem } from "./CarouselItem/CarouselItem";

import html from '../../assets/html-image.png';
import css from '../../assets/css-image.jpg';
import js from '../../assets/js-image.png';

export function Tecnologies() {
    const responsive = {
        0: { items: 1.15 },
        580: { items: 2.15 }

      };

    const staticItems = [
        {
            name: 'HTML',
            image: html,
        },
        {
            name: 'CSS',
            image: css,
        },
        {
            name: 'JS',
            image: js,
        },
    ]

    const items = staticItems.map((language, index) => {
        return (
            <CarouselItem key={index} name={language.name} image={language.image} />
        );
    });

    return (
        <TecnologiesContainer>
            <h1>TECNOLOGIAS</h1>
            <AliceCarousel mouseTracking items={items} responsive={responsive} />
        </TecnologiesContainer>
    );
}