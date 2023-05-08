import React from "react";
import './Main.css';
import img from './img.png'

export default function Main() {
    return (
        <main>
            <div className="text-container">

                <h3>Start Fitness Training</h3>
                <h3>Join Now</h3>

            </div>

            <img src={img} />

            <hr />
        </main>
    );
}