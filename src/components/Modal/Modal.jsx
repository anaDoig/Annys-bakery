import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart, updateItemCart } from "../../modules/shoppingCart/actions";
import "./Modal.scss";

const Modal = ({ setIsOpen, selected }) => {
  const [value, setValue] = useState(Object.keys(selected.price)[0]);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    const { id, ...product } = selected;
    console.log(selected);
    const selectValue = event.target.size.value;
    event.preventDefault();

    dispatch(
      addToCart({
        ...product,
        size: selected.size[selectValue],
        price: selected.price[selectValue],
      })
    );
  };

  const handleSelect = (event) => {
    setValue(event.target.value);
  };

  const handleUpdate = (id, quantity) => {
    dispatch(updateItemCart(id, quantity));
  };

  return (
    <div className='modal-veil'>
      <div className='modal'>
        <div className='modal__content'>
          <span className='modal__close-modal' onClick={() => setIsOpen(false)}>
            X
          </span>
          <p className='modal__title'>{selected.name}</p>
          <form onSubmit={handleSubmit}>
            <p className='modal__price'>{value ? selected.price[value] : "-"}€</p>
            <select id='size' className='modal__units' onChange={handleSelect}>
              {Object.entries(selected.size).map(([key, value]) => (
                <option value={key}>
                  {value} {selected.unit}
                </option>
              ))}
            </select>
            <div className='modal__price-container'>
              <button className='modal__add-to-cart'>Añadir</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
