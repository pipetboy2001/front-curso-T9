/* eslint-disable jsx-a11y/anchor-is-valid */
// Footer.js
import React from 'react';

function Footer() {
    return (
        <footer className="layout__footer">
            <div className="layout__footer-hechopor">
                <h2 className="layout__footer-title">Hecho con ❤ por Pipetboy</h2>
                <p className="layout__footer-parraf">Enfocados en nuestros amados conejos y buscando su bienestar</p>
            </div>

            <div className="layout__footer-enlaces">
                <h3 className="layout__footer-title">Enlaces de interés</h3>
                <ul className="layout__footer-list">
                    <li><a className="layout__footer-link" href="https://es.wikipedia.org/wiki/Oryctolagus_cuniculus">Wiki</a></li>
                    <li><a className="layout__footer-link" href="https://www.bioenciclopedia.com/conejo-535.html">bioenciclopedia</a></li>
                </ul>
            </div>

            <div className="layout__footer-section">
                <h3 className="layout__footer-title">Redes sociales</h3>
                <ul className="layout__footer-list">
                    <li><a className="layout__footer-social-link" href="#"><img src="./Assests/instagram-logo.png" alt="Instagram" width="30" /></a></li>
                    <li><a className="layout__footer-social-link" href="#"><img src="./Assests/R.png" alt="Facebook" width="30" /></a></li>
                    <li><a className="layout__footer-social-link" href="#"><img src="./Assests/image.png" alt="Twitter" width="30" /></a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
