import React from "react";
import './Plans.css'

export default function Plans() {
    return (
        <section>

            <h1>Plans</h1>
            <h4>The best, infrastructure and much more with affordable monthly fees.</h4>

            <div className="planos">

                <div className="card-plans">

                    <p>Annual Plan </p>
                    <h3>$ 79.99</h3>

                </div>

                <div className="card-plans">

                    <p>Month Plan </p>
                    <h3>$ 7.99</h3>

                </div>
            </div>

            <hr />

        </section>
    );
}