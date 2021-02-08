import formatCurrency from "../utils"

function Products(props) {
	return (
		<div>
			<ul className="products">
			{props.products.length > 0 ? props.products.map((item) => (
				<li key={item._id}>
					<div className="product">
						<a href={`#/${item._id}`}>
							<img src={item.image} alt={item.title}></img>
							<p>{item.title}</p>
						</a>
						<div className="product-price">
							<div>
								{formatCurrency(item.price)}
							</div>
							<button className="button primary">
								Add to cart
							</button>
						</div>
					</div>
				</li>
			)) : "No data"}
			</ul>
		</div>
	)
};

export default Products;

