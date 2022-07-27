import { actionsTypes } from "./actionsTypes";

const checkExist = async (product) => {
  const response = await fetch("http://localhost:4000/shoppingCart");
  const data = await response.json();
  return data.find(({ name, size }) => name === product.name && size === product.size);
};

const addToCart = (product) => async (dispatch) => {
  dispatch({ type: actionsTypes.ADD, payload: product });
  const finded = await checkExist(product);

  if (finded) {
    dispatch(updateItemCart(finded.id, finded.quantity + 1));
    return;
  }

  return fetch("http://localhost:4000/shoppingCart", {
    body: JSON.stringify({ ...product, quantity: 1 }),
    method: "POST",
    headers: { "Content-Type": "application/json" },
  }).then(() => {
    dispatch(getListCart());
  });
};

const removeFromCart = (id) => (dispatch) => {
  dispatch({ type: actionsTypes.REMOVE, payload: id });

  return fetch(`http://localhost:4000/shoppingCart/${id}`, {
    method: "DELETE",
  }).then(() => {
    dispatch(getListCart());
  });
};

const getListCart = () => (dispatch) => {
  dispatch({ type: actionsTypes.LIST_PENDING, payload: { isLoading: true } });

  return fetch("http://localhost:4000/shoppingCart", {
    method: "GET",
  })
    .then(async (response) => {
      const items = await response.json();
      dispatch({ type: actionsTypes.LIST_FULLFILED, payload: items });
    })
    .catch((error) => {
      dispatch({ type: actionsTypes.LIST_ERROR, payload: { error } });
    })
    .finally(() => {
      dispatch({ type: actionsTypes.LIST_PENDING, payload: { isLoading: false } });
    });
};

const updateItemCart = (id, quantity) => (dispatch) => {
  dispatch({ type: actionsTypes.UPDATE, payload: id });

  return fetch(`http://localhost:4000/shoppingCart/${id}`, {
    body: JSON.stringify({ quantity: Number(quantity) }),
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
  }).then(() => {
    dispatch(getListCart());
  });
};

export { addToCart, removeFromCart, getListCart, updateItemCart };
