import {FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE} from "../types.js";


export const fetchProducts = () => async (dispatch) => {
	try {
		let result = await fetch("http://localhost:2021/api/v1/product");
		let json = await result.json();
		// .then(res => res.json())
		// .then(data => data.message)
		dispatch({
			type: FETCH_PRODUCTS,
			payload: json.message.products
		});
	} catch (error) {
		console.log(error);
	};
};

export const filterProducts = (products, size) => (dispatch) => {
	try {
		dispatch({
			type: FILTER_PRODUCTS_BY_SIZE,
			payload: {
				size: size,
				items: size === "" ? products : products.filter((item)=> item.availableSizes.indexOf(size) >= 0)
			}
		});
	} catch (error) {
		console.log(error);
	};
};

export const sortProducts = (products, sort) => (dispatch) => {
	try {
		const t = products.slice().sort((a, b) => {
			if (sort === "Lowest") {
				return a.price > b.price ? 1 : -1
			} else if (sort === "Highest") {
				return a.price < b.price ? 1 : -1
			} else if (sort === "Latest") {
				return a._id > b._id ? 1 : -1
			}
			return a._id > b._id ? 1 : -1 
		});
		dispatch({
			type: ORDER_PRODUCTS_BY_PRICE,
			payload: {
				sort: sort,
				items: t
			}
		});
	} catch (error) {
		console.log(error);
	};
};
// 
// export const addProduct = () => async (dispatch) => {
// 	try {
// 		let result = {}
// 		
// 	} catch (error) {
// 		console.log(error)
// 	}
// }