export const FETCH_CUPCAKES = 'FETCH_CUPCAKES';
export const FETCH_CUPCAKES_OK = 'FETCH_CUPCAKES_OK';
export const FETCH_CUPCAKES_ERROR = 'FETCH_CUPCAKES_ERROR';

export const actionFetchCupcakes = () => ({
	type: FETCH_CUPCAKES,
});

export const actionFetchCupcakesOk = (cupcakes) => ({
	type: FETCH_CUPCAKES_OK,
	payload: cupcakes,
});

export const actionFetchCupcakesError = () => ({
	type: FETCH_CUPCAKES_ERROR,
});

export function fetchCupcakes() {
	return async (dispatch) => {
		dispatch(actionFetchCupcakes());

		try {
			const response = await fetch('http://localhost:4000/cupcakes');
			const data = await response.json();
			dispatch(actionFetchCupcakesOk(data));
		} catch (error) {
			dispatch(actionFetchCupcakesError);
		}
	};
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
