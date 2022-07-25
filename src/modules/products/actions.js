import { type } from "@testing-library/user-event/dist/type";

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_OK = 'FETCH_PRODUCTS_OK';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

export const actionFetchProducts = () => ({
    type: FETCH_PRODUCTS,
})

export const actionFetchProductsOk = (products) => ({
    type: FETCH_PRODUCTS_OK,
    payload: products,
})

export const actionFetchProductsError = () => ({
    type: FETCH_PRODUCTS_ERROR,
})

export function getProducts() {
    return async (dispatch) => {

        dispatch(actionFetchProducts());

        try {
            const response = await fetch('http://localhost:4000/cookies');
            const data = await response.json();
            console.log(data);
            dispatch(actionFetchProductsOk(data));
        } catch (error) {
            console.log(error);
            dispatch(actionFetchProductsError);
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