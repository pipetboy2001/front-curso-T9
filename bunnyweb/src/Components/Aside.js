import React from 'react';

function Aside() {
    return (
        <aside className="layout__aside">
            <div className="pilar">
                <img src="./Assests/conejo1.jpg" alt="Pilar 1" width="200" />
                <h3>Información</h3>
                <p>Dedicado a la información sobre las diferentes razas de conejos.</p>
                <a href="#" className="btn btn-primary btn-lg btn-block">Ver más</a>
            </div>
            <div className="pilar">
                <img src="./Assests/conejo3.jpg" alt="Pilar 3" width="200"/>
                    <h3>Conejitos en adopción</h3>
                    <p>Conejitos en adopción para que puedas darle un hogar a un conejito que lo necesite.</p>
                    <a href="#" class="btn btn-primary btn-lg btn-block">Ver más</a>
            </div>
        </aside>
    );
}

export default Aside;
