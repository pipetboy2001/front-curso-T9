import React from 'react';
import ConejoKnow from './../Assets/HD-wallpaper-cute-rabbit-standing-cute-rabbit.jpg';

function DidYouKnow() {
    return (
        <div className="sabias-que">
            <h2 className="sabias-que__title">Sabías que...</h2>
            <img className="sabias-que__image" src={ConejoKnow} alt="" width="200" />
            <p className="sabias-que__text">
                Sabías que los dientes de los conejos nunca dejan de crecer a lo largo de toda su
                vida? Esto se debe a que necesitan desgastar constantemente sus dientes para mantenerlos a una longitud
                adecuada y poder comer correctamente. Por eso, los conejos necesitan tener una dieta rica en fibra para
                masticar y desgastar sus dientes de forma natural. Además, sus dientes crecen a una velocidad de
                aproximadamente 2 a 3 mm por semana, por lo que el desgaste constante es crucial para evitar problemas
                dentales como maloclusión o dientes desalineados 🦷
            </p>
        </div>
    );
}

export default DidYouKnow;
