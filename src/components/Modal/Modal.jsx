import "./Modal.scss";

const Modal = ({ setIsOpen, selected }) => {
  console.log(selected);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);

    // dispatch(addToCard())
  };

  return (
    <div className="modal-veil">
      <div className="modal">
        <div className="modal__content">
          <span className="modal__close-modal" onClick={() => setIsOpen(false)}>
            X
          </span>
          <p className="modal__title">{selected.name}</p>
          <form onSubmit={handleSubmit}>
            <p className="modal__price">{selected.price}€</p>
            <select className="modal__units">
              {Object.values(selected.size).map(({ id, desc }) => (
                <option value={id}>{desc}</option>
              ))}
              {/* <option>6 unid.</option>
              <option>12 unid.</option> */}
            </select>
            <div className="modal__price-container">
              <div className="modal__qty">
                <button className="modal__qty-button">-</button>
                <span className="modal__selected-qty">1</span>
                <button className="modal__qty-button">+</button>
              </div>
              <button className="modal__add-to-cart">Añadir</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
