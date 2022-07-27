import './ProductsComponent.scss';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCookies } from '../../modules/cookies/actions';
import { getCookies } from "../../modules/cookies/selectors";
import ProductCard from "../../components/ProductCard/ProductCard";

const ProductsComponent = ({array, productLink, productTitle}) => {
    const dispatch = useDispatch();
    const { cookies, loading, errors } = useSelector(getCookies);
    const newArray = [];

    useEffect(() => {
        dispatch(fetchCookies());
    }, []);

    

    return (
        <section>
        <div className='products'>
            <div className='main-container center'>
                <h2>{productTitle}</h2>
                <a href={productLink} title='Ver más' className='products__link'>Ver más</a>
                <div className='column-container'>
                    {
                        array.map((product) => (
                            <ProductCard
                                product={product}
                            />
                        ))
                    } 
                </div>
            </div>
        </div>

        </section>

        
    )

}

export default ProductsComponent;