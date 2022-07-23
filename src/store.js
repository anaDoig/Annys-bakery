import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { shoppingCartReducer } from "./modules/shoppingCart/reducers";

const rootReducer = combineReducers({ shoppingCart: shoppingCartReducer });

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
