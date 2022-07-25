import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { shoppingCartReducer } from "./modules/shoppingCart/reducers";
import productsReducer from "./modules/products/reducer";
import cakesReducer from "./modules/cakes/reducer";

const rootReducer = combineReducers({ 
    shoppingCart: shoppingCartReducer ,
    products: productsReducer,
    cakes: cakesReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;