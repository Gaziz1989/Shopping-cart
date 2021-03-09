export const addToCart = (product) => (dispatch, getState) => {
	try {
		const items = getState().cart.cartItems.slice(0);
		let alreadyInCart = false;
		items.forEach((item) => {
			if (item.id === product.id) {
				item.count++;
				alreadyInCart = true;
			};
		});
		if (!alreadyInCart) {
			items.push({...product, count: 1});
		};
		dispatch({
			type: "ADD_TO_CART",
			payload: {
				cartItems: items
			}
		})
		localStorage.setItem("cartItems", JSON.stringify(items));
	} catch (error) {
		console.log(error);
	}
};

export const removeFromCart = (product) => (dispatch, getState) => {
	try {
		const items = getState().cart.cartItems.slice(0);
		const tmp = items.filter(x => x.id !== product.id);
		dispatch({
			type: "REMOVE_FROM_CART",
			payload: {
				cartItems: tmp
			}
		});
		localStorage.setItem("cartItems", JSON.stringify(tmp));
	} catch (error) {
		console.log(error);
	}
};

export const createOrder = (order) => async (dispatch) => {
	try {
		let res = await fetch("http://localhost:2021/api/v1/order", {
			method: "POST",
			mode: "cors",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(order)
		});
		if (res.status) {
			alert("Your order will be processed soon")
		}
		dispatch({
			type: "CREATE_ORDER",
			payload: {
				cartItems: []
			}
		});
		localStorage.setItem("cartItems", JSON.stringify([]));
	} catch (error) {
		console.log(error);
	}
}