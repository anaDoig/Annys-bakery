export const FETCH_COOKIES = 'FETCH_COOKIES';
export const FETCH_COOKIES_OK = 'FETCH_COOKIES_OK';
export const FETCH_COOKIES_ERROR = 'FETCH_COOKIES_ERROR';

export const actionFetchCookies = () => ({
    type: FETCH_COOKIES,
})

export const actionFetchCookiesOk = (cookies) => ({
    type: FETCH_COOKIES_OK,
    payload: cookies,
})

export const actionFetchCookiesError = () => ({
    type: FETCH_COOKIES_ERROR,
})

export function fetchCookies() {
    return async (dispatch) => {

        dispatch(actionFetchCookies());

        try {
            const response = await fetch('http://localhost:4000/cookies');
            const data = await response.json();
            dispatch(actionFetchCookiesOk(data));
        } catch (error) {
            dispatch(actionFetchCookiesError());
        }
    }
}