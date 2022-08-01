import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { shoppingCartReducer } from './modules/shoppingCart/reducers';
import cakesReducer from './modules/cakes/reducer';
import cupcakesReducer from './modules/cupcakes/reducer';
import cookiesReducer from './modules/cookies/reducer';

const rootReducer = combineReducers({
	shoppingCart: shoppingCartReducer,
	cakes: cakesReducer,
	cupcakes: cupcakesReducer,
	cookies: cookiesReducer,
});

const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
