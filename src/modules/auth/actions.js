import { actions } from "./actionTypes";

const createUser = (user) => (dispatch) => {
  fetch("http://localhost:4000/register", {
    body: JSON.stringify(user),
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
};

const login = (user) => (dispatch) => {
  dispatch({ type: actions.LOGIN, payload: { isLoading: true } });

  fetch("http://localhost:4000/login", {
    body: JSON.stringify(user),
    method: "POST",
    headers: { "Content-Type": "application/json" },
  })
    .then(async (response) => {
      const data = await response.json();
      dispatch({ type: actions.LOGIN, payload: data });
    })
    .catch((error) => {
      console.error("que haces xiquillo?, andate por ahi!");
    });
};

export { createUser, login };
