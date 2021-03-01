export const productReducers = (currentState = {}, action) => {
	switch (action.type) {
		case "FETCH_PRODUCTS":
			return {items: action.payload};
		default:
			return currentState;
	}
}