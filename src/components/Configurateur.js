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
    const [selectSiege, setSelectSiege] = useState(false);
    const [selectAccessoires, setSelectAccessoires] = useState(false);
    const [pureOuLegend, setPureOuLegend] = useState('');
    const [jante, setJante] = useState('');
    const [selectColor, setSelectColor] = useState('blanc');
    const dispatch = useDispatch();
    const state = useSelector(state => state.configurateur);
    const stateAuto = useState({
        modele: 'legende',
        couleur: 'blanc',
        jante: 'legende',
        accessoires: []
    })
    console.log(stateAuto[0]);
    function navConfig() {
        return (
            <div className='container-fluid mt-5' >
                <div className='row justify-content-center'>
                    <div className='col d-flex justify-content-center'>
                        <button onClick={next} className='btn btn-secondary bg-blueAlpine text-white'>Couleur</button>
                    </div>
                    <div className='col d-flex justify-content-center'>
                        <button onClick={next1} className='btn btn-secondary text-white bg-blueAlpine'>Jantes</button>
                    </div>
                    <div className='col d-flex justify-content-center'>
                        <button onClick={next2} className='btn btn-secondary text-white bg-blueAlpine'>Scellerie</button>
                    </div>
                    <div className='col d-flex justify-content-center'>
                        <button onClick={next3} className='btn btn-secondary text-white bg-blueAlpine'>Equipements</button>
                    </div>
                    <div className='col d-flex justify-content-center'>
                        <button className='btn btn-secondary bg-blueAlpine text-white'>Accessoires</button>
                    </div>

                </div>
            </div>
        )
    }
    function accessoires() {
        return (
            <div className="container">
                <div className='row'>
                    <div className="col-6">

                        <Carousel array={state.accessoiresExte} />
                    </div>
                    <div className='col-6 mt-5'>
                        <h3>Accessoires Extérieur</h3>
                        <ul>
                            <li><button value='51' className='btn'>AntiVol</button> <span>51€</span></li>
                            <li><button className='btn'>cabochons</button><span>24€</span></li>
                            <li><button className='btn'>housse</button><span>216€</span></li>
                        </ul>

                    </div>
                    <div className="col-6">

                        <Carousel array={state.accessoiresInte} />
                    </div>
                    <div className='col-6 mt-5'>
                        <h3>Accessoires Intérieur</h3>
                        <ul>
                            <li><button value='51' className='btn'>AntiVol</button> <span>51€</span></li>
                            <li><button className='btn'>cabochons</button><span>24€</span></li>
                            <li><button className='btn'>housse</button><span>216€</span></li>
                        </ul>

                    </div>
                    <div className="col-6">

                        <Carousel array={state.accessoiresGarage} />
                    </div>
                    <div className='col-6 mt-5'>
                        <h3>Accessoires de garage</h3>
                        <ul>
                            <li><button className='btn'>AntiVol</button> <span>51€</span></li>
                            <li><button className='btn'>cabochons</button><span>24€</span></li>
                            <li><button className='btn'>housse</button><span>216€</span></li>
                        </ul>

                    </div>
                    <div className="col-6">

                        <Carousel array={state.accessoiresMulti} />
                    </div>
                    <div className='col-6 mt-5'>
                        <h3>Accessoires Multimedia</h3>
                        <ul>
                            <li><button value='51' className='btn'>AntiVol</button> <span>51€</span></li>
                            <li><button className='btn'>cabochons</button><span>24€</span></li>
                            <li><button className='btn'>housse</button><span>216€</span></li>
                        </ul>

                    </div>
                    <div className="col-6">

                        <Carousel array={state.accessoiresProtec} />
                    </div>
                    <div className='col-6 mt-5'>
                        <h3>Accessoires de sécurité</h3>
                        <ul>
                            <li><button value='51' className='btn'>AntiVol</button> <span>51€</span></li>
                            <li><button className='btn'>cabochons</button><span>24€</span></li>
                            <li><button className='btn'>housse</button><span>216€</span></li>
                        </ul>

                    </div>
                    {/* <Carousel array={state.accessoiresGarage} />
                    <Carousel array={state.accessoiresInte} />
                    <Carousel array={state.accessoiresExte} />
                    <Carousel array={state.accessoiresGarage} /> */}
                </div>
            </div>
        )
    }
    function handleSelect(e) {
        setPureOuLegend(e.target.classList[0]);
        let jannte = e.target.classList[0];
        if (jannte === 'legende') {
            setJante('legende');
            stateAuto[0].modele = 'legende'
        } else {
            stateAuto[0].modele = 'pure'
            setJante('standard');
        }
        console.log(jante);
        setSelectModele(true);
    }
    function handle(e) {
        let couleur = e.target.classList[0];
        setSelectColor(couleur);
        stateAuto[0].couleur = couleur


        let jannte = jante
        console.log(state.modele[0]);

        dispatch(changementDeCouleur({
            color: couleur,
            modele: pureOuLegend,
            jante: jannte
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
    function next() {
        setSelectJante(false);
        setSelectModele(true);


        dispatch(changementDeCouleur({
            color: selectColor,
            modele: pureOuLegend,
            jante: jante
        }));

    }
    function next1() {
        setSelectJante(true);
        setSelectModele(true);
        setSelectSiege(false)
        setSelectAccessoires(false)


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
    function next2(e) {
        setSelectJante(true);
        setSelectModele(true);
        setSelectSiege(true)
    }
    function next3(e) {
        setSelectJante(true);
        setSelectModele(true);
        setSelectSiege(true)
        setSelectAccessoires(true)
    }
    function scellerie() {
        if (pureOuLegend == 'pure') {
            return (
                <div className="container">
                    < Carousel array={state.scelleriePure} />
                    <div className='row justify-content-center'>
                        <button className='btn btn-secondary col-3 me-3'>cuir noir dinamica</button>
                        <button className='btn btn-secondary col-3 '>Cuir noir perfore</button>
                    </div>
                </div>
            )

        } else {
            return (
                <>
                    <div className='container'>


                        <Carousel array={state.scellerieLegende} />
                        <div className='row justify-content-center'>
                            <button className='btn btn-secondary col-3 me-3'>Cuir noir</button>
                            <button className='btn btn-secondary col-3 '>Cuir brun</button>
                        </div>
                    </div>
                </>
            )

        }
    }
    console.log(stateAuto[0].modele);

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
                            {selectSiege ? (
                                <>
                                    {
                                        selectAccessoires ? (
                                            <>
                                                {accessoires()}
                                                {navConfig()}

                                            </>
                                        ) : (
                                            <>
                                                {scellerie()}
                                                {navConfig()}
                                            </>

                                        )
                                    }


                                </>
                            ) : (
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

                                                    </>
                                                ) : (
                                                    <>
                                                        <h4 className='text-center'>Ce modéle est compatible qu'avec les jante 'Legend'</h4>

                                                    </>
                                                )}

                                            </div>
                                            {navConfig()}
                                        </div>
                                    </div>
                                </>
                            )}
                        </>
                    ) : (
                        <>

                            <div className='container-fluid'>

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

                                {navConfig()}
                            </div>
                        </>
                    )}
                    { }

                </>
            ) : (
                <>
                    <h1 className='text-center mt-4'>Modele disponible</h1>
                    <div className="container">
                        <div className='row justify-content-around'>
                            <div className='col-3'>
                                <h4 className='text-center'>Pure</h4>
                                <button onClick={handleSelect} className='pure standard btn btn-light border border-1'>
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
                                    <tr>
                                        <td style={{ color: '#a3a4a5' }}>Prix</td>
                                        <td>54 700€</td>
                                    </tr>
                                </table>
                            </div>
                            <div className='col-3'>
                                <h4 className='text-center'>Legend</h4>
                                <button onClick={handleSelect} className='legende btn btn-light  border border-1'>
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
                                    <tr>
                                        <td style={{ color: '#a3a4a5' }}>Prix</td>
                                        <td>58 500€</td>
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
