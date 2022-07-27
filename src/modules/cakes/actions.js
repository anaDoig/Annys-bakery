export const FETCH_CAKES = 'FETCH_CAKES';
export const FETCH_CAKES_OK = 'FETCH_CAKES_OK';
export const FETCH_CAKES_ERROR = 'FETCH_CAKES_ERROR';

export const actionFetchCakes = () => ({
    type: FETCH_CAKES,
})

export const actionFetchCakesOk = (cakes) => ({
    type: FETCH_CAKES_OK,
    payload: cakes,
})

export const actionFetchCakesError = () => ({
    type: FETCH_CAKES_ERROR,
})

export function fetchCakes() {
    return async (dispatch) => {

        dispatch(actionFetchCakes());

        try {
            const response = await fetch('http://localhost:4000/cakes');
            const data = await response.json();
            dispatch(actionFetchCakesOk(data));
        } catch (error) {
            dispatch(actionFetchCakesError);
        }
    }
}

// export const getProducts = (cookies) => dispatch => {
//     dispatch({ type: FETCH_PRODUCTS });

//     const urlPage = url;

//     fetch(url)
//         .then((res) => res.json())
//         .then((res) => {
//             if (res.error) throw new Error(res.error);

//             dispatch({
//                 type: FETCH_PRODUCTS_OK,
//                 payload: { ...res, page: urlPage },
//             });
//             console.log(res);
//         })
//         .catch((error) => {
//             dispatch({
//               type: FETCH_PRODUCTS_ERROR,
//               payload: error.message,
//             });
//         });
// }