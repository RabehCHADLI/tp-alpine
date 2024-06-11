import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

// Importa las imágenes desde la ruta correcta
import img1 from '../Assets-TP-Alpine-master/images/sources-homepage/galerie/A110_LEGENDE_1.jpg';
import img2 from '../Assets-TP-Alpine-master/images/sources-homepage/galerie/A110_LEGENDE_5.jpg';
import img3 from '../Assets-TP-Alpine-master/images/sources-homepage/galerie/A110_LEGENDE_9.jpg';
import img4 from '../Assets-TP-Alpine-master/images/sources-homepage/galerie/A110_PE_1.jpg';
import img5 from '../Assets-TP-Alpine-master/images/sources-homepage/galerie/A110_PE_7.jpg';
import img6 from '../Assets-TP-Alpine-master/images/sources-homepage/galerie/A110_PE_9.jpg';
import img7 from '../Assets-TP-Alpine-master/images/sources-homepage/galerie/A110_PURE_4.jpg';
import img8 from '../Assets-TP-Alpine-master/images/sources-homepage/galerie/A110_PURE_6.jpg';
import img9 from '../Assets-TP-Alpine-master/images/sources-homepage/galerie/A110_PURE_8.jpg';

function Gallery() {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
    const [showModal, setShowModal] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const handleShow = (image) => {
        setCurrentImage(image);
        setShowModal(true);
        document.body.classList.add('modal-open');
    };

    const handleClose = () => {
        setShowModal(false);
        setCurrentImage(null);
        document.body.classList.remove('modal-open');
    };

    return (
        <div className="container mt-5 gallery-container">
            <div className="row">
                {images.map((image, index) => (
                    <div className="col-lg-4 col-md-6 mb-4" key={index}>
                        <div className="card" onClick={() => handleShow(image)}>
                            <img src={image} className="card-img-top" alt={`Image ${index + 1}`} />
                        </div>
                    </div>
                ))}
            </div>

            <Modal show={showModal} onHide={handleClose} centered size="lg">
                <Modal.Body>
                    {currentImage && <img src={currentImage} className="img-fluid" alt="Large view" />}
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Gallery;