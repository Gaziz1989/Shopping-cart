export const productReducers = (currentState = {}, action) => {
	switch (action.type) {
		case "FILTER_PRODUCTS_BY_SIZE":
		return {...currentState, filteredItems: action.payload.items, size: action.payload.size};
		case "ORDER_PRODUCTS_BY_PRICE":
		return {...currentState, sort: action.payload.sort, filteredItems: action.payload.items};
		case "FETCH_PRODUCTS":
			return {items: action.payload, filteredItems: action.payload};
		default:
			return currentState;
	}
}