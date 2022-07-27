import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCookies, getSliderItem } from "../../modules/cookies";
import { fetchCupcakes } from "../../modules/cupcakes";
import { fetchCakes } from "../../modules/cakes";
import ProductsComponent from "../../components/ProductsComponent/ProductsComponent";

const Products = () => {
  const dispatch = useDispatch();
  const { cakes, cookies, cupcakes } = useSelector((state) => ({
    cookies: getSliderItem(state, "cookies"),
    cakes: getSliderItem(state, "cakes"),
    cupcakes: getSliderItem(state, "cupcakes"),
  }));

  useEffect(() => {
    dispatch(fetchCookies());
    dispatch(fetchCupcakes());
    dispatch(fetchCakes());
  }, []);

  return (
    <section>
      <div className='title-container center bg-green'>
        <h1>Nuestros Productos</h1>
      </div>

      <div className='products'>
        <ProductsComponent source={cookies} productTitle='Cookies' productLink='/cookies' />
      </div>

      <div className='products bg-mauve'>
        <ProductsComponent source={cakes} productTitle='Cakes' productLink='/cakes' />
      </div>

      <div className='products'>
        <ProductsComponent source={cupcakes} productTitle='Cupcakes' productLink='/cupcakes' />
      </div>
    </section>
  );
};

export default Products;
