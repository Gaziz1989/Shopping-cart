import formatCurrency from "../utils";

function Carts(props) {
	return (
		<div>
			{props.cartItems.length > 0 
				? <div className="cart cart-header">You have {props.cartItems.length} items in cart</div>
				: <div className="cart cart-header">Cart is empty</div>}
				<div>
					<div className="cart">
						<ul className="cart-items">
							{
								props.cartItems.map((item) => (
									<li key={`${item._id}-cart-item`}>
										<div>
											<img src={item.image} alt={item.title}></img>
										</div>
										<div>
											<div>{item.title}</div>
											<div className="right">
												{formatCurrency(item.price)} x {item.count} {" "}
												<button className="button" onClick={() => props.removeFromCart(item)}>Remove</button>
											</div>
										</div>
										</li>
										))
								}
							</ul>
						</div>
						<div className="cart">
							{
							props.cartItems.length > 0 ? <div className="total">
								<div>
									Total: {" "}{formatCurrency(props.cartItems.reduce((a,c) => a + c.price * c.count, 0))}
								</div>
								<button className="button primary" onClick={props.proceedCartItems}>Proceed</button>
							</div> : ""
							}
						</div>
					</div>
					</div>
					)
};

export default Carts;