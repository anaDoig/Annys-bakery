import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCookies } from '../../modules/cookies/selectors';
import { fetchCookies } from '../../modules/cookies/actions';
import { getCupcakes } from '../../modules/cupcakes/selectors';
import { fetchCupcakes } from '../../modules/cupcakes/actions';
import { fetchCakes } from "../../modules/cakes/actions";
import { getCakes } from "../../modules/cakes/selector";
import ProductsComponent from '../../components/ProductsComponent/ProductsComponent';

const Products = () => {

    const cookiesArray = [];
    const cakesArray = [];
    const cupcakesArray = [];

    const cookiesTitle = 'Cookies';
    const cookiesLink = '/cookies';
    const cupcakesTitle = 'Cupcakes';
    const cupcakesLink = '/cupcakes';
    const cakesTitle = 'Cakes';
    const cakesLink = '/cakes';

    const dispatch = useDispatch();

    const { cookies } = useSelector(getCookies);
    const { cakes } = useSelector(getCakes);
    const { cupcakes } = useSelector(getCupcakes);
    

    useEffect(() => {
        dispatch(fetchCookies());
    }, []);

    useEffect(() => {
        dispatch(fetchCupcakes());
    }, []);
    
    useEffect(() => {
        dispatch(fetchCakes());
    }, []);

    for(let i = 0; i < 3; i++) {
        cookiesArray.push(cookies[i]);
        cupcakesArray.push(cupcakes[i]);
        cakesArray.push(cakes[i]);
    }

    console.log(cakes);
    console.log(cookies);
    console.log(cookiesArray);
    console.log(cakesArray);
      
    return (
        <section>
            <div className='title-container center bg-green'>
                <h1>Nuestros Productos</h1>
            </div>

            <div className='products'>
                <ProductsComponent 
                    array={cookiesArray} 
                    productTitle={cookiesTitle} 
                    productLink={cookiesLink}
                />
            </div>

            <div className='products bg-mauve'>
                <ProductsComponent 
                    array={cakesArray} 
                    productTitle={cakesTitle} 
                    productLink={cakesLink}
                />
            </div>

            <div className='products'>
                <ProductsComponent 
                    array={cupcakesArray} 
                    productTitle={cupcakesTitle} 
                    productLink={cupcakesLink}
                />
            </div>

            
            

        </section>


    )
}

export default Products;
