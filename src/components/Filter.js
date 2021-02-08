
function Filter(props) {
	return (
		<div className="filter">
			<div className="filter-result">
				{props.count} Products
			</div>
			<div className="filter-sort">
				Order{" "}
				<select name="" id="" value={props.sort} onChange={props.sortProducts}>
					<option value="Latest">Latest</option>
					<option value="Lowest">Lowest</option>
					<option value="Highest">Highest</option>
				</select>
			</div>
			<div className="filter-size">
				Filter
				<select name="" id="" value={props.size} onChange={props.filterProducts}>
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

export default Filter;