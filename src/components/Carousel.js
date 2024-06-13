import React from 'react';
import noir from "../Assets-TP-Alpine-master/selection/noir.jpg";
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Carousel = (props) => {
    const array = props.array;
    return (
        <>
            <Splide aria-label="My Favorite Images" options={{
                type: 'loop',
                autoplay: true
            }}>
                {array.map((url) => (
                    <SplideSlide >
                        <img src={url} alt="" />
                    </SplideSlide>
                ))}
            </Splide>
        </>
    );
}

export default Carousel;
