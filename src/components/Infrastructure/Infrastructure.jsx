import React from "react";
import './Infrastructure.css'

import equipments from './img/equipments.jpeg'
import room from './img/room.jpeg'
import area from './img/area.jpeg'

export default function Infrastructure() {
    return (
        <div>

            <div className="infrestutura-titulo">
                <h1>Infrastructure</h1>
            </div>

            <div className="card-container">

                <div className="card-infrastruture">
                    <img className="imagem-infrestutura" src={equipments} />
                    <p>High standard equipment</p>
                </div>

                <div className="card-infrastruture">
                    <img className="imagem-infrestutura" src={room} />
                    <p>Exclusive group classrooms</p>
                </div>

                <div className="card-infrastruture">
                    <img className="imagem-infrestutura" src={area} />
                    <p>Weight training and cardio areas</p>
                </div>

            </div>

            <hr />

        </div>
    );
}