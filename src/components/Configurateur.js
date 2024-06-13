import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import blanc from "../Assets-TP-Alpine-master/selection/blanc.jpg";
import bleu from "../Assets-TP-Alpine-master/selection/bleu.jpg";
import noir from "../Assets-TP-Alpine-master/selection/noir.jpg";
import legendImg from "../Assets-TP-Alpine-master/images/selection/legende.png";
import pureImg from "../Assets-TP-Alpine-master/images/selection/pure.png";
import { changementDeCouleur } from '../slice/configurateurSlice';
import { changementDeJante } from '../slice/configurateurSlice';
import Carousel from './Carousel';

const Configurateur = () => {
    const [selectModele, setSelectModele] = useState(false);
    const [selectJante, setSelectJante] = useState(false);
    const [pureOuLegend, setPureOuLegend] = useState('');
    const [jante, setJante] = useState('');
    const [selectColor, setSelectColor] = useState('blanc');
    const dispatch = useDispatch();
    const state = useSelector(state => state.configurateur);

    function handleSelect(e) {
        setPureOuLegend(e.target.classList[0]);
        let jannte = e.target.classList[0];
        if (jannte === 'legende') {
            setJante(jannte);
        } else {
            setJante(e.target.classList[1]);
        }
        setSelectModele(true);
    }
    function handle(e) {
        let couleur = e.target.classList[0];
        setSelectColor(couleur);
        dispatch(changementDeCouleur({
            color: couleur,
            modele: pureOuLegend,
            jante: jante
        }));
    }
    function handleJante(e) {
        let jannte = e.target.classList[0];
        console.log(jannte);

        dispatch(changementDeJante({
            color: selectColor,
            modele: pureOuLegend,
            jante: jannte
        }))
    }
    function next1() {
        setSelectJante(true);
        setSelectModele(true);
        let jannte = 'standard';

        setJante(jannte => {
            dispatch(changementDeCouleur({
                color: selectColor,
                modele: pureOuLegend,
                jante: jannte
            }));
            return jannte;
        });
    }

    return (
        <>
            <NavLink to="/">
                <button className="btn btn-primary">
                    retour a la landing
                </button>
            </NavLink>
            {selectModele ? (
                <>
                    {selectJante ? (
                        <>
                            <h2 className='text-center'>Choisit les jantes</h2>
                            <div className='container'>

                                <Carousel array={state.modele} />
                                <div className="container">
                                    <div className='row justify-content-center'>

                                        {pureOuLegend === 'pure' ? (
                                            <>
                                                <div className='col-3'>
                                                    <h6 className='text-center'>Standard</h6>
                                                    <button onClick={handleJante} className='btn btn-light'><img className='standard' src={state.jantepure[0]} alt="" /></button>

                                                </div>
                                                <div className='col-3'>
                                                    <h6 className='text-center'>Sérac</h6>

                                                    <button onClick={handleJante} className='btn btn-light'><img className='serac' src={state.jantepure[1]} alt="" /></button>

                                                </div>
                                                <button className='btn btn-secondary'>Valider</button>

                                            </>
                                        ) : (
                                            <>
                                                <h4 className='text-center'>Ce modéle est compatible qu'avec les jante 'Legend'</h4>

                                                <button className='btn btn-secondary text-center' style={{ width: '150px' }}>Valider</button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
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
                            <button className='btn btn-secondary' onClick={next1}>Valider</button>
                        </div>
                    )}
                </>
            ) : (
                <>
                    <h1 className='text-center'>Choisit le Modele</h1>
                    <div className="container">
                        <div className='row justify-content-around'>
                            <div className='col-3'>
                                <h4 className='text-center'>Pure</h4>
                                <button onClick={handleSelect} className='btn btn-light border border-1'>
                                    <img className='pure standard' src={pureImg} alt="" />
                                </button>
                                <table className='container-fluid'>
                                    <h5 className='text-center'>Caractèristique</h5>
                                    <tr>
                                        <td style={{ color: '#a3a4a5' }}>Energie</td>
                                        <td>Essence</td>
                                    </tr>
                                    <tr>
                                        <td style={{ color: '#a3a4a5' }}>Puissance commerciale</td>
                                        <td>252 ch</td>
                                    </tr>
                                    <tr>
                                        <td style={{ color: '#a3a4a5' }}>Puissance fiscale</td>
                                        <td>15 CV</td>
                                    </tr>
                                    <tr>
                                        <td style={{ color: '#a3a4a5' }}>Boîte de vitesses</td>
                                        <td>Automatique</td>
                                    </tr>
                                    <tr>
                                        <td style={{ color: '#a3a4a5' }}>Consommation mixte</td>
                                        <td>6,4 L/100 Km</td>
                                    </tr>
                                    <tr>
                                        <td style={{ color: '#a3a4a5' }}>Carrosserie</td>
                                        <td>Coupé</td>
                                    </tr>
                                </table>
                            </div>
                            <div className='col-3'>
                                <h4 className='text-center'>Legend</h4>
                                <button onClick={handleSelect} className='btn btn-light  border border-1'>
                                    <img className='legende' src={legendImg} alt="" />
                                </button>
                                <table className='container-fluid'>
                                    <h5 className='text-center'>Caractèristique</h5>
                                    <tr>
                                        <td style={{ color: '#a3a4a5' }}>Energie</td>
                                        <td>Essence</td>
                                    </tr>
                                    <tr>
                                        <td style={{ color: '#a3a4a5' }}>Puissance commerciale</td>
                                        <td>252 ch</td>
                                    </tr>
                                    <tr>
                                        <td style={{ color: '#a3a4a5' }}>Puissance fiscale</td>
                                        <td>15 CV</td>
                                    </tr>
                                    <tr>
                                        <td style={{ color: '#a3a4a5' }}>Boîte de vitesses</td>
                                        <td>Automatique</td>
                                    </tr>
                                    <tr>
                                        <td style={{ color: '#a3a4a5' }}>Consommation mixte</td>
                                        <td>6,4 L/100 Km</td>
                                    </tr>
                                    <tr>
                                        <td style={{ color: '#a3a4a5' }}>Carrosserie</td>
                                        <td>Coupé</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </>
            )
            }
        </>
    );
}

export default Configurateur;
