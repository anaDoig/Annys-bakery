import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSliderItem } from '../../selectors';
import { fetchCookies } from '../../modules/cookies';
import { fetchCupcakes } from '../../modules/cupcakes';
import { fetchCakes } from '../../modules/cakes';
import ProductsComponent from '../../components/ProductsComponent/ProductsComponent';

const Products = () => {
	const dispatch = useDispatch();
	const { cakes, cookies, cupcakes } = useSelector((state) => ({
		cookies: getSliderItem(state, 'cookies'),
		cakes: getSliderItem(state, 'cakes'),
		cupcakes: getSliderItem(state, 'cupcakes'),
	}));

	useEffect(() => {
		dispatch(fetchCookies());
		dispatch(fetchCupcakes());
		dispatch(fetchCakes());
	}, []);

	return (
		<section>
			<div className="title-container center bg-green">
				<h1>Nuestros Productos</h1>
			</div>

			<div className="products">
				<ProductsComponent source={cookies} title="Cookies" link="/cookies" />
			</div>

			<div className="products bg-mauve">
				<ProductsComponent source={cakes} title="Cakes" link="/cakes" />
			</div>

			<div className="products">
				<ProductsComponent source={cupcakes} title="Cupcakes" link="/cupcakes" />
			</div>
		</section>
	);
};

export default Products;
