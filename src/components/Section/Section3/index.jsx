import React from "react";
import './section3.css'
import dance from './img/dance.jpeg'
import shape from './img/shape.jpeg'
import combat from './img/combat.jpeg'
import relogio from './img/icons/relogio.png'
import bateria from './img/icons/bateria.png'

function Section3() {
    return (
        <div className="extras">
            <div className="extras-titulo">
                <h1>Exclusive classes and training!</h1>
            </div>

            <div className="card3">
                <img className="extras-imagem" src={dance} alt="" />
                <h3>FITDANCE</h3>
                <div className="extras-icons-container">
                    <div className="relogio">
                        <img className="extras-icons" src={relogio} alt="" srcset="" />
                        <h6>Duration <br /> 30/ 45 /60 min</h6>
                    </div>
                    <div className="bateria">
                        <img className="extras-icons" src={bateria} alt="" srcset="" />
                        <h6>High Intensity</h6>
                    </div>
                </div>
                <hr />
                <div>
                    <p>For you to enjoy every step, Smart Fit dance classes are taught by teachers licensed by FitDance.</p>
                </div>

            </div>

            <div className="card3">
                <img className="extras-imagem" src={shape} alt="" />
                <h3>SMART SHAPE</h3>
                <div className="extras-icons-container">
                    <div className="relogio">
                        <img className="extras-icons" src={relogio} alt="" srcset="" />
                        <h6>Duration<br /> 30/ 45 /60 min</h6>
                    </div>
                    <div className="bateria">
                        <img className="extras-icons" src={bateria} alt="" srcset="" />
                        <h6>High Intensity</h6>
                    </div>
                </div>
                <hr />
                <div><p>Our exclusive, intense, 30-minute slimming circuit is a combination of several exercises.</p></div>
            </div>

            <div className="card3">
                <img className="extras-imagem" src={combat} alt="" />
                <h3>BODY COMBAT</h3>
                <div className="extras-icons-container">
                    <div className="relogio">
                        <img className="extras-icons" src={relogio} alt="" srcset="" />
                        <h6>Duration <br /> 30/45/60 min</h6>
                    </div>
                    <div className="bateria">
                        <img className="extras-icons" src={bateria} alt="" srcset="" />
                        <h6>High Intensity</h6>
                    </div>
                </div>
                <hr />
                <div><p>Karate, Jiu-jitsu, Capoeira, Kung Fu and Taekwondo are some of the inspirations for the BodyCombat class. This workout still works the whole body.</p>
                </div>
            </div>
        </div>
    );
}

export default Section3;