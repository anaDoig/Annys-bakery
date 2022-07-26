import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { shoppingCartReducer } from "./modules/shoppingCart/reducers";
import cakesReducer from "./modules/cakes/reducer";
import cupcakesReducer from "./modules/cupcakes/reducer";
import cookiesReducer from "./modules/cookies/reducer";

const rootReducer = combineReducers({ 
    shoppingCart: shoppingCartReducer,
    cakes: cakesReducer,
    cupcakes: cupcakesReducer,
    cookies: cookiesReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
