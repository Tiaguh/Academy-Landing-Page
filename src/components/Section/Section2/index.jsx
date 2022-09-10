import React from "react";
import './section2.css'
import equipamentos from './img/equipamentos.jpeg'
import area from './img/area.jpeg'
import sala from './img/sala.jpeg'

function Section2() {
    return (
        <div className="infrestutura">
            <div className="infrestutura-titulo">
                <h1>Infrastructure</h1>
            </div>
            <div className="card2">
                <img className="imagem-infrestutura" src={equipamentos} alt="" />
                <p>High standard equipment</p>
            </div>
            <div className="card2">
                <img className="imagem-infrestutura" src={sala} alt="" />
                <p>Exclusive group classrooms</p>
            </div>
            <div className="card2">
                <img className="imagem-infrestutura" src={area} alt="" />
                <p>Weight training and cardio areas</p>
            </div>
             <hr />
        </div>
    );
}

export default Section2;
