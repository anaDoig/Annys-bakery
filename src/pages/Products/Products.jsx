import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCookies } from '../../modules/cookies/selectors';
import { fetchCookies } from '../../modules/cookies/actions';
import Newsletter from '../../components/Newsletter/Newsletter';

const Products = () => {
    const dispatch = useDispatch();
    const { cookies } = useSelector(getCookies);

    useEffect(() => {
        dispatch(fetchCookies());
    }, []);
      
    return (
        <section>
            <div className='title-container center bg-green'>
                <h2>Nuestros Productos</h2>
            </div>

            <div className='products'>
                <div className='main-container center'>
                    <h2>Cookies</h2>
                    <Link to='/cookies' title='Cookies' className='products__link'>Ver más</Link>
                    <div className='column-container'>
                        <div className='col'>
                            <a className='product-card' href="/cookies" title='Product name'>
                                <figure className='product-card__img'>
                                    <img src='https://i.imgur.com/CUg1ekI.jpg' alt="Cookies de Nutella" />
                                </figure>
                                <h4>Nutella cookies</h4>
                                <p className='product-card__price'>Desde <span>12€</span></p>
                            </a>
                        </div>
                        <div className='col'>
                            <a className='product-card' href="/cookies" title='Almond cookies'>
                                <figure className='product-card__img'>
                                    <img src='https://i.imgur.com/DYHgYm3.jpg' alt="Tarta" />
                                </figure>
                                <h4>Almond cookies</h4>
                                <p className='product-card__price'>Desde <span>12€</span></p>
                            </a>
                        </div>
                        <div className='col'>
                            <a className='product-card' href="/cookies" title='Polvorones cookies'>
                                <figure className='product-card__img'>
                                    <img src='https://i.imgur.com/4NLoDj0.jpg' alt="Tarta" />
                                </figure>
                                <h4>Polvorones cookies</h4>
                                <p className='products__price'>Desde <span>12€</span></p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='products bg-mauve'>
                <div className='main-container center'>
                    <h2>Tartas</h2>
                    <Link to='/Cakes' title='Tartas' className='products__link'>Ver más</Link>
                    <div className='column-container'>
                        <div className='col'>
                            <a className='product-card' href="/cakes" title='Chocolate Cake'>
                                <figure className='product-card__img'>
                                    <img src='https://i.imgur.com/8cNLZ4K.jpg' alt="Tarta" />
                                </figure>
                                <h4>Chocolate Cake</h4>
                                <p className='product-card__price'>Desde <span>40€</span></p>
                            </a>
                        </div>
                        <div className='col'>
                            <a className='product-card' href="/cakes" title='Product name'>
                                <figure className='product-card__img'>
                                    <img src='https://i.imgur.com/s3LtuGD.jpg' alt="Tarta" />
                                </figure>
                                <h4>Letter Cake</h4>
                                <p className='product-card__price'>Desde <span>45€</span></p>
                            </a>
                        </div>
                        <div className='col'>
                            <a className='product-card' href="" title='Meme Cake'>
                                <figure className='product-card__img'>
                                    <img src='https://i.imgur.com/AxiXyAR.jpg' alt="Tarta" />
                                </figure>
                                <h4>Meme Cake</h4>
                                <p className='product-card__price'>Desde <span>40€</span></p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='products'>
                <div className='main-container center'>
                    <h2>Cupcakes</h2>
                    <Link to='/cupcakes' title='Cookies' className='products__link'>Ver más</Link>
                    <div className='column-container'>
                        <div className='col'>
                            <a className='product-card' href="" title='Carrot Cupcakes'>
                                <figure className='product-card__img'>
                                    <img src='https://i.imgur.com/2OR9ill.jpg' alt="Carrot Cupcakes" />
                                </figure>
                                <h4>Carrot Cupcakes</h4>
                                <p className='product-card__price'>Desde <span>14€</span></p>
                            </a>
                        </div>
                        <div className='col'>
                            <a className='product-card' href="/cupcakes" title='Chips&Cookies Cupcakes'>
                                <figure className='product-card__img'>
                                    <img src='https://i.imgur.com/oMH2Whr.jpg' alt="Tarta" />
                                </figure>
                                <h4>Chips&Cookies Cupcakes</h4>
                                <p className='product-card__price'>Desde <span>14€</span></p>
                            </a>
                        </div>
                        <div className='col'>
                            <a className='product-card' href="/cupcakes" title='Product name'>
                                <figure className='product-card__img'>
                                    <img src='https://i.imgur.com/3DjmD3N.jpg' alt="Chocolate Cupcakes" />
                                </figure>
                                <h4>Chocolate Cupcakes</h4>
                                <p className='products__price'>Desde <span>14€</span></p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Newsletter />
        </section>
    )
}

export default Products;
