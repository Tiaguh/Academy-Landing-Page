import React from "react";
import './section.css'

function Section() {
    return (
        <div className="section">
            <h1>Plans</h1>
            <h4>The best, infrastructure and much more with affordable monthly fees.</h4>
            <div className="planos">
                <div className="card">
                    <p>Annual Plan </p>
                    <h3>$ 79.99</h3>
                </div>
                <div className="card">
                    <p>Month Plan </p>
                    <h3>$ 7.99</h3>
                </div>
            </div>
            <hr className="linha"></hr>
        </div>
    );
}

export default Section;