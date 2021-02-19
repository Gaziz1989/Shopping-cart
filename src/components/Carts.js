import formatCurrency from "../utils";
import {useState} from 'react';
import Fade from "react-reveal/Fade"

function Carts(props) {
	const [showCheckout, setShowCheckout] = useState(false);
	const [email, setEmail] = useState("");
	const [name, setName ] = useState("");
	const [address, setAddress] = useState("");

	const changeEmail = (e) => {
		setEmail(e.target.value)
	}
	const changeName = (e) => {
		setName(e.target.value)
	}
	const changeAddress = (e) => {
		setAddress(e.target.value)
	}

	const createOrder = (e) => {
		e.preventDefault();
		const order = {
			name: name,
			email: email,
			address: address,
			cartItems: props.cartItems
		}
		props.createOrder(order)
	}

	return (
		<div>
			{props.cartItems.length > 0 
				? <div className="cart cart-header">You have {props.cartItems.length} items in cart</div>
				: <div className="cart cart-header">Cart is empty</div>}
				<div>
					<div className="cart">
						<Fade left cascade>
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
						</Fade>
						</div>
						{	props.cartItems.length !== 0 && 
							(
								<div>
									<div className="cart">
										<div className="total">
											<div>
												Total: {" "}{formatCurrency(props.cartItems.reduce((a,c) => a + c.price * c.count, 0))}
											</div>
											<button className="button primary" onClick={() => setShowCheckout(!showCheckout)}>Proceed</button>
										</div> 
									</div>
									{
										showCheckout && (
											<Fade right cascade>
											<div className="cart">
											<form onSubmit={createOrder}>
												<ul className="form-container">
													<li>
														<label htmlFor="email">Email</label>
														<input name="email" type="email" required onChange={changeEmail}></input>
													</li>
													<li>
														<label htmlFor="name">Name</label>
														<input name="name" type="text" required onChange={changeName}></input>
													</li>
													<li>
														<label htmlFor="address">Address</label>
														<input name="address" type="text" required onChange={changeAddress}></input>
													</li>
													<li>
														<button type="submit" className="button primary">Checkout</button> 
													</li>
												</ul>	
											</form>
											</div>
											</Fade>)
										}
								</div>
									)
								}

							</div>
							</div>
							)
};

export default Carts;