import { actions } from './actionTypes';

export const INITIAL_STATE = {
	user: null,
	loading: false,
	errors: null,
};

export default function cookiesReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case actions.LOGIN:
			return state;
		case actions.LOGOUT:
			return state;

		default:
			return state;
	}
}
