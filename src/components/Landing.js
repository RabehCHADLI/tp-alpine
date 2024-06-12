import React from "react";
import videoSrc from '../Assets-TP-Alpine-master/video/Alpine-Milan-HomePage-1680x951-950-non-possible-v3-12072021.mp4';
import Gallery from './Gallery'; // Importa el componente de la galería
import CarCarousel from "./CarCarousel";
import { Navbar } from "react-bootstrap";
import Footer from "./Footer";


function Landing() {
    return (
        <>
            <Navbar />

            <section className="video-section">
                <div className="video-container">
                    <video autoPlay loop muted>
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>

            <section className="gallery-section">
                <Gallery />
            </section>

            <section className="carousel-section">
                <CarCarousel />
            </section>

            <Footer />
        </>
    );
}

export default Landing;
