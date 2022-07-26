import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Cupcakes.scss';
import { fetchCupcakes } from '../../modules/cupcakes/actions';
import { getCupcakes } from '../../modules/cupcakes/selectors';
import Modal from '../../components/Modal/Modal';
import ProductCard from '../../components/ProductCard/ProductCard';

const Cupcakes = () => {
	const dispatch = useDispatch();
	const { cupcakes, loading, errors } = useSelector(getCupcakes);
	const [modalState, setModalState] = useState({
		isOpen: false,
		selected: null,
	});

	useEffect(() => {
		dispatch(fetchCupcakes());
	}, []);

	const handleSelect = (product) => {
		setModalState((prev) => ({ ...prev, selected: product, isOpen: true }));
	};

	return (
		<>
			{modalState.isOpen && <Modal setIsOpen={setModalState} selected={modalState.selected} />}

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
						{cupcakes.map((cupcakes) => (
							<ProductCard key={cupcakes.id} product={cupcakes} onSelect={handleSelect} />
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Cupcakes;
