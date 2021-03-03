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