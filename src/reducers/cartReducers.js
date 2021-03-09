export const cartReducers = (
		currentState = {cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []},
		action) => {
		switch (action.type) {
		case "ADD_TO_CART":
			return {cartItems: action.payload.cartItems};
		case "REMOVE_FROM_CART":
			return {cartItems: action.payload.cartItems};
		case "CREATE_ORDER":
			return {cartItems: action.payload.cartItems}
		default:
			return currentState;
	}
}