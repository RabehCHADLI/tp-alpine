import React from 'react'
import { NavLink } from 'react-router-dom'

const Configurateur = () => {
    return (
        <NavLink to="/">
            <button className="btn btn-primary">
                retour a la landing
            </button>
        </NavLink>
    )
}
export default Configurateur