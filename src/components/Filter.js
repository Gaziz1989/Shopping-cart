import {filterProducts, sortProducts} from "../actions/productActions"
import {connect} from "react-redux";

function Filter(props) {
	return (
		!props.filteredItems ? <div>Loading...</div> :
		<div className="filter">
			<div className="filter-result">
				{props.filteredItems.length} Products
			</div>
			<div className="filter-sort">
				Order{" "}
				<select name="" id="" value={props.sort} onChange={(e) =>props.sortProducts(props.filteredItems, e.target.value)}>
					<option value="Latest">Latest</option>
					<option value="Lowest">Lowest</option>
					<option value="Highest">Highest</option>
				</select>
			</div>
			<div className="filter-size">
				Filter
				<select name="" id="" value={props.size} onChange={(e) =>props.filterProducts(props.products, e.target.value)}>
					<option value="ALL">ALL</option>
					<option value="XS">XS</option>
					<option value="S">S</option>
					<option value="M">M</option>
					<option value="L">L</option>
					<option value="XL">XL</option>
					<option value="XXL">XXL</option>
				</select>
			</div>
			</div>
			)
		
};

export default connect((state) => ({
	size: state.products.size,
	sort: state.products.sort,
	products: state.products.items,
	filteredItems: state.products.filteredItems
}), {
	filterProducts,
	sortProducts
})(Filter);