import * as actions from './actions';

export const INITIAL_STATE = {
    cookies: [],
    loading: false,
    errors: null
}

export default function cookiesReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.FETCH_COOKIES:
            return { ...state, loading: true };
        case actions.FETCH_COOKIES_OK:
            console.log(state);
            return { ...state, cookies: action.payload };
            
        case actions.FETCH_COOKIES_ERROR:
            return { ...state, loading: false, errors: true }
        default:
            return state;
    }
}
