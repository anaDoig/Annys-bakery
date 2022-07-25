import React from "react";
import { Link } from "react-router-dom";
import './Cupcakes.scss';

const Cupcakes = () => {
    return (
        <section className="cookies bg-green">
            <div className="main-container">
            <div className="products-hero col-2">
                <div className="col">
                    <div className="hero-content">
                        <ul className="breadcrumbs">
                            <li>
                                <Link to="/products">Productos</Link>
                            </li>
                            <li>
                                <Link to="">Cupcakes</Link>
                            </li>
                        </ul>
                        <h2>Cupcakes</h2>
                        <p>No need to play favorites! Our sample packs offer an assortment of Magnolia Bakery classics and best sellers.</p>
                    </div>
                </div>
                <div className="col">
                    <figure>
                        <img src="https://i.imgur.com/c7hW5L6.jpeg"></img>
                    </figure>
                </div>
            </div>
            </div>
            
        </section>
    )
}

export default Cupcakes;