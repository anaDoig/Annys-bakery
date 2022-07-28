import "./ShoppingCart.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, getListCart, updateItemCart } from "../../modules/shoppingCart/actions";
import { getShoppingCart } from "../../modules/shoppingCart/selectors";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IconTrash } from "../../components/Icon/IconTrash";
import { ItemCart } from "../../components/ItemCart/ItemCart";
import { IconArrowRight } from "../../components/Icon/IconArrowRight";
import { Link } from "react-router-dom";
import emptyCartImg from '../../assets/img/carritovacio.png';

const calculateTotal = (items) => items.reduce((total, { price, quantity }) => price * quantity + total, 0);
const ivaTotal = (subtotal) => (subtotal * 10) / 110;

const ShoppingCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getShoppingCart);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdate = (id, quantity) => {
    dispatch(updateItemCart(id, quantity));
  };

  useEffect(() => {
    dispatch(getListCart());
  }, []);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <>
    <section className="shopping-cart flex-one">
      <div className='bg-mauve'>
        <div className='title-container'>
          <h2>Carrito</h2>
        </div>
      </div>
      <div className='main-container'>
        <ul className='breadcrumbs'>
          <li>
            <Link to="/products">Carrito</Link>
          </li>
          <li>Datos de Envio</li>
          <li>Pago</li>
        </ul>
      </div>
      <div className='main-container'>
        <div className='col-2'>
          <div className='col'>
            {items.length === 0 ? (
              <div className="empty-cart">
                <figure>
                  <img src={emptyCartImg} />
                </figure>

                <p>Carrito Vacío</p>
              
              </div>
            ) : (
              items.map(({ name, id, price, img, size, quantity, unit }) => (
                <div key={id}>
                  <div className='items_container'>
                    <img className='image' src={img} alt='' />
                    <div className='container-option'>
                      <h4 className='title'>{name}</h4>
                      <p className='size'>
                        Tamaño: {size} {unit}
                      </p>
                    </div>
                    <div className='qty_container'>
                      <button className='bton-qty' onClick={() => handleUpdate(id, quantity - 1)} disabled={quantity === 1}>
                        -
                      </button>
                      <span>{quantity}</span>
                      <button className='bton-qty' onClick={() => handleUpdate(id, quantity + 1)}>
                        +
                      </button>
                    </div>
                    <p className='price'>{price}€</p>
                    <div onClick={() => handleRemove(id)}>
                      <IconTrash width={15} heigth={15} fill='red' />
                    </div>
                  </div>
                </div>
              ))
            )}
            <button className='button' onClick={() => navigate("/products")}>
              Seguir Comprando
            </button>
          </div>

          <div className='col right'>
            <h3>TOTAL DEL CARRITO</h3>
            <div className="amount-container">
              <p>Subtotal</p>
              <p className="amount-container__subtotal">{calculateTotal(items)} €</p>
              <div>
                Total
                <p className="amount-container__total">
                  {calculateTotal(items)} € <span>(incluye {ivaTotal(calculateTotal(items)).toFixed(2)} € IVA 10%)</span>
                </p>
              </div>
            </div>
            <button className='button '>Finalizar Compra</button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ShoppingCart;
