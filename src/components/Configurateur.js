import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'


const Configurateur = () => {
    const state = useSelector(state => state.configurateur)
    return (
        <>
            <NavLink to="/">
                <button className="btn btn-primary">
                    retour a la landing
                </button>
            </NavLink>
            <div id="carouselExampleFade" className="carousel slide carousel-fade">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={state.modele[0]} className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src={state.modele[1]} className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src={state.modele[2]} className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src={state.modele[3]} className="d-block w-100" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
export default Configurateur