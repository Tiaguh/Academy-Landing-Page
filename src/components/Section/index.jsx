import React from "react";
import './section.css'

function Section() {
    return (
        <div className="section">
            <div className="card">
                <div className="anual">
                    <p>Annual Plan </p>
                    <h3>$ 79.99</h3>
                </div>
            </div>
            <div className="card">
                <div className="month">
                    <p>Month Plan </p>
                    <h3>$ 7.99</h3>
                </div>
            </div>
        </div>
    );
}

export default Section;