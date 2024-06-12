import React from 'react';

const Footer = () => {
    return (
        <footer className="footer ">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <p>122-122 bis avenue du Général Leclerc – 92 100 Boulogne-Billancourt – France,</p>
                        <p>780 129 987 (hereafter « RENAULT »),</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Liens Utiles</h5>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/sobre-nosotros">About Us</a></li>
                            <li><a href="/productos">Produits</a></li>
                            <li><a href="/contacto">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Suive nous</h5>
                        <ul className="social-icons">
                            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
