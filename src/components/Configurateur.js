import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import blanc from "../Assets-TP-Alpine-master/selection/blanc.jpg";
import bleu from "../Assets-TP-Alpine-master/selection/bleu.jpg";
import noir from "../Assets-TP-Alpine-master/selection/noir.jpg";
import { changementDeCouleur } from '../slice/configurateurSlice';
import Carousel from './Carousel';


const Configurateur = () => {
    const [selectModele, setSelectModele] = useState('blanc')
    const dispatch = useDispatch()
    const state = useSelector(state => state.configurateur)
    function handle(e) {
        let couleur = e.target.classList[0]
        setSelectModele(couleur)
        dispatch(changementDeCouleur({
            color: couleur
        }))
    }
    return (
        <>
            <NavLink to="/">
                <button className="btn btn-primary">
                    retour a la landing
                </button>
            </NavLink>

            <div className='container'>
                <Carousel array={state.modele} />

                <div className='row'>
                    <div className='col-4 d-flex justify-content-center'>
                        <button onClick={handle}><img className='blanc' src={blanc} style={{ width: '300px' }} alt="" /></button>
                    </div>
                    <div className='col-4 d-flex justify-content-center'>
                        <button onClick={handle}><img className='bleu' src={bleu} style={{ width: '300px' }} alt="" /></button>
                    </div>
                    <div className='col-4 d-flex justify-content-center'>
                        <button onClick={handle}><img className='noir' src={noir} alt="" style={{ width: '300px' }} /></button>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Configurateur