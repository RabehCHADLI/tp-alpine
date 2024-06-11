import React from "react";
import { NavLink } from "react-router-dom";

function Landing() {
    return (
        <>
            <NavLink to="/Configurateur">
                <button className="btn btn-primary">
                    Config ta StéphaneMobile
                </button>
            </NavLink>
            <div>Landing page</div>
        </>
    );
}

export default Landing;