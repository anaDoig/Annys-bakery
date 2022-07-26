import "./ShoppingCart.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, getListCart, updateItemCart } from "../../modules/shoppingCart/actions";
import { getShoppingCart } from "../../modules/shoppingCart/selectors";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IconTrash } from "../../components/Icon/IconTrash";

const calculateTotal = (items) => items.reduce((total, { price, quantity }) => price * quantity + total, 0);
const useCounter = () => {
  const [count, setCount] = useState();
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
};

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
      <div className='main-container padding-top'>
        <div className='col-2'>
          <div className='col'>
            {items.map(({ name, id, price, img, size, quantity }) => (
              <div key={id}>
                <div className='items_container'>
                  <img className='image' src={img} alt='' />
                  <div className='container-option'>
                    <h4 className='title'>{name}</h4>
                    <p className='size'>Tamaño: {size}</p>
                  </div>
                  {/* <div>
                    <button onClick={() => btonIncrement.increment()}>+</button>
                    <button onClick={() => btonDecrement.decrement()}>-</button>
                  </div> */}
                  <select onChange={(event) => handleUpdate(id, event.target.value)} value={quantity} className='quantity' name='quantity'>
                    {Array.from({ length: 9 }).map((_, index) => (
                      <option key={`option_${index}`} value={index + 1}>
                        Cant : {index + 1}
                      </option>
                    ))}
                  </select>
                  <p className='price'>{price}€</p>
                  <div onClick={() => handleRemove(id)}>
                    <IconTrash width={15} heigth={15} fill='red' />
                  </div>
                </div>
              </div>
            ))}
            <button onClick={() => navigate("/products")}>Seguir comprando</button>
          </div>

          <div className='col right'>
            <h1>total del carrito</h1>
            <div>
              <span>Subtotal </span>
              <span>{calculateTotal(items)}</span>
            </div>
            <button>finalizar compra</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
