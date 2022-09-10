import React from "react";
import './main.css';
import meucasal from './meucasal.png'

function Main() {
    return (
        <div className="main">
            <div>
                <h3>Start Fitness Training</h3>
                <h3>Join Now</h3>
            </div>
            <img className="foto" src={meucasal} />
            <hr />
        </div>
    );
}

export default Main;