import "./ShoppingCart.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, getListCart, updateItemCart } from "../../modules/shoppingCart/actions";
import { getShoppingCart } from "../../modules/shoppingCart/selectors";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IconTrash } from "../../components/Icon/IconTrash";
import { ItemCart } from "../../components/ItemCart/ItemCart";

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
      <div className='bg-mauve'>
        <div className='section-header'>
          <h2>Carrito</h2>
        </div>
      </div>
      <div className='main-container padding-top'>
        <div className='col-2'>
          <div className='col'>
            {items.length === 0 ? (
              <div>Carrito Vacio</div>
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
            <h1>TOTAL DEL CARRITO</h1>
            <div>
              <p>Subtotal {calculateTotal(items)}</p>
              <p>
                Total {calculateTotal(items)}(incluye <span>{ivaTotal(calculateTotal(items)).toFixed(2)}</span> IVA 10%)
              </p>
            </div>
            <button className='button '>Finalizar Compra</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
