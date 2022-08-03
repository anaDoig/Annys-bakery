import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { addToCart } from '../../modules/shoppingCart';
import './Modal.scss';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success('Tu producto se ha añadido');

const Modal = ({ setIsOpen, selected }) => {
	const [value, setValue] = useState(Object.keys(selected.price)[0]);
	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		const { id, ...product } = selected;
		const selectValue = event.target.size.value;
		event.preventDefault();

		dispatch(
			addToCart({
				...product,
				size: selected.size[selectValue],
				price: selected.price[selectValue],
			}),
		);
	};

	const handleSelect = (event) => {
		setValue(event.target.value);
	};

	return (
		<div className="modal-veil">
			<Toaster />
			<div className="modal">
				<div className="modal__content">
					<span className="modal__close-modal" onClick={() => setIsOpen(false)}>
						X
					</span>
					<p className="modal__title">{selected.name}</p>
					<form onSubmit={handleSubmit}>
						<p className="modal__price">{value ? selected.price[value] : '-'}€</p>

						<div className="modal__select-container">
							<select id="size" className="modal__units" onChange={handleSelect}>
								{Object.entries(selected.size).map(([key, value]) => (
									<option value={key}>
										{value} {selected.unit}
									</option>
								))}
							</select>
							<button className="modal__add-to-cart" onClick={notify}>
								Añadir
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Modal;
