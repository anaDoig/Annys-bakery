import { actionsTypes } from "./actionsTypes";

const initialState = {
  items: [],
  error: false,
  isLoading: false,
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.ADD:
      return state;
    case actionsTypes.REMOVE:
      return state;

    case actionsTypes.LIST_PENDING:
      return { ...state, ...action.payload };
    case actionsTypes.LIST_FULLFILED:
      return { ...state, items: action.payload };
    case actionsTypes.LIST_ERROR:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export { shoppingCartReducer };
