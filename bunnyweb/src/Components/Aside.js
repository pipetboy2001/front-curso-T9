import React from 'react';
import ConejoPilar1 from './../Assets/conejo1.jpg';
import ConejoPilar2 from './../Assets/conejo2.jpg';
import ConejoPilar3 from './../Assets/conejo3.jpg';

function Aside() {
    return (
        <aside class="layout__aside">
            <div class="pilar">
                <img src={ConejoPilar1} alt="Pilar 1" width="200" />
                <h3>Información</h3>
                <p>Dedicado a la información sobre las diferentes razas de conejos.</p>
                <button className="btn btn-primary btn-lg btn-block">Ver más</button>

            </div>
            <div class="pilar">
                <img src={ConejoPilar2} alt="Pilar 2" width="200" />
                <h3>Galería de imágenes</h3>
                <p>Galería de imágenes de conejitos para que puedas disfrutar de su belleza.</p>
                <button className="btn btn-primary btn-lg btn-block">Ver más</button>

            </div>
            <div class="pilar">
                <img src={ConejoPilar3} alt="Pilar 3" width="200" />
                <h3>Conejitos en adopción</h3>
                <p>Conejitos en adopción para que puedas darle un hogar a un conejito que lo necesite.</p>
                <button className="btn btn-primary btn-lg btn-block">Ver más</button>

            </div>
        </aside>
    );
}

export default Aside;
