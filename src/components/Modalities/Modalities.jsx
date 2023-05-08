import React from "react";
import './Modalities.css'

import dance from './img/dance.jpeg'
import shape from './img/shape.jpeg'
import combat from './img/combat.jpeg'
import relogio from './img/icons/relogio.png'
import bateria from './img/icons/bateria.png'

export default function Modalities() {
    return (
        <div>

            <div className="modalidades-titulo">
                <h1>Exclusive classes and training!</h1>
            </div>

            <div className="cards-container">

                <div className="card-modalites">

                    <img className="modalidades-imagem" src={dance} />

                    <h3>FITDANCE</h3>

                    <div className="modalidades-icons-container">

                        <div className="clock">
                            <img className="modalidades-icons" src={relogio} />
                            <h6>Duration <br /> 30 | 45 | 60 min</h6>
                        </div>

                        <div className="batery">
                            <img className="modalidades-icons" src={bateria} />
                            <h6>High Intensity</h6>
                        </div>

                    </div>

                    <hr />

                    <div>
                        <p>For you to enjoy every step, Smart Fit dance classes are taught by teachers licensed by FitDance.</p>
                    </div>

                </div>

                <div className="card-modalites">
                    <img className="modalidades-imagem" src={shape} />
                    <h3>SMART SHAPE</h3>
                    <div className="modalidades-icons-container">
                        <div className="clock">
                            <img className="modalidades-icons" src={relogio} />
                            <h6>Duration<br /> 30 | 45 | 60 min</h6>
                        </div>
                        <div className="batery">
                            <img className="modalidades-icons" src={bateria} />
                            <h6>High Intensity</h6>
                        </div>
                    </div>
                    <hr />
                    <div><p>Our exclusive, intense, 30-minute slimming circuit is a combination of several exercises.</p></div>
                </div>

                <div className="card-modalites">

                    <img className="modalidades-imagem" src={combat} />

                    <h3>BODY COMBAT</h3>
                    <div className="modalidades-icons-container">
                        <div className="clock">
                            <img className="modalidades-icons" src={relogio} />
                            <h6>Duration <br /> 30 | 45 | 60 min</h6>
                        </div>
                        <div className="batery">
                            <img className="modalidades-icons" src={bateria} />
                            <h6>High Intensity</h6>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <p>Karate, Jiu-jitsu, Capoeira, Kung Fu and Taekwondo are some of the inspirations for the BodyCombat class. This workout still works the whole body.</p>
                    </div>

                </div>


            </div>

        </div>
    );
}