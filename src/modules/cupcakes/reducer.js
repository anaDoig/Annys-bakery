import * as actions from './actions';

export const INITIAL_STATE = {
	cupcakes: [],
	loading: false,
	errors: null,
};

export default function cupcakesReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
	case actions.FETCH_CUPCAKES:
		return { ...state, loading: true };
	case actions.FETCH_CUPCAKES_OK:
		return { ...state, cupcakes: action.payload };

	case actions.FETCH_CUPCAKES_ERROR:
		return { ...state, loading: false, errors: true };
	default:
		return state;
	}
}
