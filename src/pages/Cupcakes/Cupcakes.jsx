import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Cupcakes.scss';
import { fetchCupcakes } from "../../modules/cupcakes/actions";
import { getCupcakes } from "../../modules/cupcakes/selectors";


const Cupcakes = () => {

    const dispatch = useDispatch();
    const { cupcakes, loading, errors } = useSelector(getCupcakes);

    useEffect(() => {
        dispatch(fetchCupcakes());
    }, []);

    console.log(cupcakes);

    return (
        <section className="cupcakes">
            <div className="bg-mauve">
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
                                <img src="https://i.imgur.com/0jOBZtn.jpeg"></img>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="main-container">
                <div className="col-4">
                    {cupcakes.map(({ name, id, img, price }) => (
                        <div className="product-card" key={id}>
                            <figure className="product-card__img">
                                <img  src={img} />
                            </figure>
                            <h4>{name}</h4>
                            <p className="product-card__price">Desde {price}€</p>
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    )
}

export default Cupcakes;