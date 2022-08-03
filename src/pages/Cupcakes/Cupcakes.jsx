import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Cupcakes.scss';
import { getCupcakes } from '../../modules/cupcakes/selectors';
import Modal from '../../components/Modal/Modal';
import ProductCard from '../../components/ProductCard/ProductCard';
import ProductsHero from '../../components/ProductsHero/ProductsHero';

const Cupcakes = () => {
	const dispatch = useDispatch();
	const { cupcakes, loading, errors } = useSelector(getCupcakes);
	const [modalState, setModalState] = useState({
		isOpen: false,
		selected: null,
	});

	const handleSelect = (product) => {
		setModalState((prev) => ({ ...prev, selected: product, isOpen: true }));
	};

	return (
		<>
			{modalState.isOpen && <Modal setIsOpen={setModalState} selected={modalState.selected} />}

			<section className="cupcakes">
				<div className="bg-mauve">
					<ProductsHero title={title} text={text} link={link} firstLinkText={firstLinkText} currentText={currentText} />
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
