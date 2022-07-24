import "./ShjoppingCart.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, getListCart, updateItemCart } from "../../modules/shoppingCart/actions";
import { getShoppingCart } from "../../modules/shoppingCart/selectors";
import { useEffect } from "react";

const ShoppingCart = () => {
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
      {items.map(({ producto, valor, id, quantity }) => (
        <div key={id}>
          <div>
            <img src='' alt='' />
          </div>
          <div>
            <h3 className='title'>{producto}</h3>
            <p className='size'></p>
            <button onClick={() => handleUpdate(id, 10)} className='amount'>
              {" "}
              cantidad
            </button>
            <button onClick={() => handleRemove(id)} className='remove'>
              X
            </button>
          </div>
          <div>
            <h2 className='price'>{valor}</h2>
            <h2 className='price'>{quantity}</h2>
          </div>
        </div>
      ))}
    </>
  );
};

export default ShoppingCart;
