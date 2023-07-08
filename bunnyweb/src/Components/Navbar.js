// Navbar.js
import React from 'react';

function Navbar() {
    return (
        <nav className="layout__nav">
            <div className="layout__logo">
                <img src="./Assests/a6d7c6bfd750222e515333e79aed4df7.png" alt="Logo Conejos" />
                <h1 className="text-h1">Conejitos Cute🥕</h1>
            </div>
            <div>
                <ul>
                    <li>
                        <a aria-current="page" href="#">Informacion</a>
                    </li>
                    <li>
                        <a aria-current="page" href="#">Galeria</a>
                    </li>
                    <li>
                        <a aria-current="page" href="#">Adopta </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
