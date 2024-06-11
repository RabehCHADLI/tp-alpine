import React from "react";
import { NavLink } from "react-router-dom";
import videoSrc from '../Assets-TP-Alpine-master/video/Alpine-Milan-HomePage-1680x951-950-non-possible-v3-12072021.mp4';
import Gallery from './Gallery'; // Importa el componente de la galería

function Landing() {
    return (
        <>
            <NavLink to="/Configurateur">
                <button className="btn btn-primary">
                    Config ta StéphaneMobile
                </button>
            </NavLink>
            <div>Landing page</div>

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
        </>
    );
}

export default Landing;
