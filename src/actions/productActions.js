import {FETCH_PRODUCTS} from "../types.js"


export const fetchProducts = () => async (dispatch) => {
	try {
		let result = await fetch("http://localhost:2021/api/v1/product").
		then(res => res.json()).
		then(data => data.message)
		dispatch({
			type: FETCH_PRODUCTS,
			payload: result.products
		})
	} catch (error) {
		console.log(error)
	}
}

export const addProduct = () => async (dispatch) => {
	try {
		let result = {}
	} catch (error) {
		console.log(error)
	}
}