import { actionsTypes } from "./actionsTypes";

const addToCart = (product) => (dispatch) => {
  dispatch({ type: actionsTypes.ADD, payload: product });

  return fetch("http://localhost:4000/shoppingCart", {
    body: JSON.stringify(product),
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

const updateItemCart = (id, amount) => (dispatch) => {
  dispatch({ type: actionsTypes.UPDATE, payload: id });

  return fetch(`http://localhost:4000/shoppingCart/${id}`, {
    body: JSON.stringify({ quantity: amount }),
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
  }).then(() => {
    dispatch(getListCart());
  });
};

export { addToCart, removeFromCart, getListCart, updateItemCart };
