import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Cakes.scss';
import { fetchCakes } from '../../modules/cakes/actions';
import { getCakes } from '../../modules/cakes/selector';
import Modal from '../../components/Modal/Modal';
import ProductCard from '../../components/ProductCard/ProductCard';

const Cakes = () => {
	const dispatch = useDispatch();
	const { cakes, loading, errors } = useSelector(getCakes);
	const [modalState, setModalState] = useState({
		isOpen: false,
		selected: null,
	});

	useEffect(() => {
		dispatch(fetchCakes());
	}, []);

	const handleSelect = (product) => {
		setModalState((prev) => ({ ...prev, selected: product, isOpen: true }));
	};

	return (
		<>
			{modalState.isOpen && <Modal setIsOpen={setModalState} selected={modalState.selected} />}
			<section className="cookies">
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
											<Link to="">Tartas</Link>
										</li>
									</ul>
									<h2>Tartas</h2>
									<p>No need to play favorites! Our sample packs offer an assortment of Magnolia Bakery classics and best sellers.</p>
								</div>
							</div>
							<div className="col">
								<figure>
									<img src="https://i.imgur.com/Wj0xU4w.jpeg"></img>
								</figure>
							</div>
						</div>
					</div>
				</div>

				<div className="main-container">
					<div className="col-4">
						{cakes.map((cake) => (
							<ProductCard key={cake.id} product={cake} onSelect={handleSelect} />
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Cakes;
