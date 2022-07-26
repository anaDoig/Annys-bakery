import * as actions from './actions';

export const INITIAL_STATE = {
    cakes: [],
    loading: false,
    errors: null
}

export default function cakesReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.FETCH_CAKES:
            return { ...state, loading: true };
        case actions.FETCH_CAKES_OK:
            return { ...state, cakes: action.payload };
            
        case actions.FETCH_CAKES_ERROR:
            return { ...state, loading: false, errors: true }
        default:
            return state;
    }
}
