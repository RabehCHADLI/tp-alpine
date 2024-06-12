import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import carImage1 from '../Assets-TP-Alpine-master/images/sources-homepage/A110/Carrousel-Alpine-A110-1.jpg';
import carImage2 from '../Assets-TP-Alpine-master/images/sources-homepage/A110/Carrousel-AlpineGT.png';
import carImage3 from '../Assets-TP-Alpine-master/images/sources-homepage/A110/Carrousel-Alpine-A110-S.png';
import carImage4 from '../Assets-TP-Alpine-master/images/sources-homepage/A110/Carrousel-Alpine-A110-R-Turini.png';


const cars = [
    {
        image: carImage1,
        model: 'A110 Pure',
        price: '$66,500',
        features: ['Turbocharged 1.8L engine', '252 HP', '0-60 mph in 4.5 seconds']
    },
    {
        image: carImage2,
        model: 'A110 Légende',
        price: '$74,800',
        features: ['Turbocharged 1.8L engine', '252 HP', '0-60 mph in 4.5 seconds', 'Luxury interior']
    },
    {
        image: carImage3,
        model: 'A110 S',
        price: '$80,000',
        features: ['Turbocharged 1.8L engine', '292 HP', '0-60 mph in 4.2 seconds', 'Sport-tuned suspension']
    },
    {
        image: carImage4,
        model: 'A110 S',
        price: '$85,000',
        features: ['Turbocharged 1.8L engine', '300 HP', '0-60 mph in 4.2 seconds', 'Sport-tuned suspension']
    }
];

function CarCarousel() {
    return (
        <Splide
            options={{
                type: 'loop',
                perPage: 1,
                perMove: 1,
                autoplay: true,
                interval: 3000,
                arrows: true,
                pagination: true,
                speed: 800,
                gap: '1rem'
            }}
        >
            {cars.map((car, index) => (
                <SplideSlide key={index}>
                    <div className="card h-100" style={{ display: 'flex', flexDirection: 'row', border: 'none' }}>
                        <img src={car.image} alt={car.model} style={{ width: '50%', height: 'auto' }} />
                        <div className="card-body">
                            <h5 className="card-title">{car.model}</h5>
                            <p className="card-text"><strong>Price:</strong> {car.price}</p>
                            <p className="card-text"><strong>Features:</strong></p>
                            <ul>
                                {car.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </SplideSlide>
            ))}
        </Splide>
    );
}

export default CarCarousel;
