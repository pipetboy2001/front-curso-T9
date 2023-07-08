/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from './../Assets/a6d7c6bfd750222e515333e79aed4df7.png';

function Navbar() {
    return (
        <nav className="layout__nav">
            <div className="layout__logo">
                <img src={logo} alt="Logo Conejos" />
                <h1 className="text-h1">Conejitos Cute🥕</h1>
            </div>
            <div>
                <ul>
                    <li>
                        <a href="#" aria-current="page">Informacion</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page">Galeria</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page">Adopta</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
