import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Cookies.scss';
import { fetchCookies } from '../../modules/cookies/actions';
import { getCookies } from '../../modules/cookies/selectors';

const Cookies = () => {
    const dispatch = useDispatch();
    const { cookies, loading, errors } = useSelector(getCookies);


    useEffect(() => {
        dispatch(fetchCookies());
    }, []);

    return (
        <section className="cookies">
            <div className="bg-green">
                <div className="main-container">
                    <div className="products-hero col-2">
                        <div className="col">
                            <div className="hero-content">
                                <ul className="breadcrumbs">
                                    <li>
                                        <Link to="/products">Productos</Link>
                                    </li>
                                    <li>
                                        <Link to="">Cookies</Link>
                                    </li>
                                </ul>
                                <h2>Cookies</h2>
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
            </div>
            <div className="main-container">
            <div className="col-4">
                    {cookies.map(({ name, id, img, price }) => (
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

export default Cookies;