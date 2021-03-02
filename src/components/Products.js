import formatCurrency from "../utils";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Modal from 'react-modal';
import {useState, useEffect} from 'react';
import {fetchProducts} from "../actions/productActions"
import {connect} from "react-redux";

function Products(props) {
	const [product, setProduct] = useState(null);

	const openModal = (product) => {
		setProduct(product);
	};
	const closeModal = () => {
		setProduct(null);
	};

	useEffect(() => {
		props.fetchProducts()
	}, []);
	return (
		<div>
			<Fade bottom cascade>
				{
					!props.products ? (<div>Loading...</div>) : 
					(					
						<ul className="products">
							{props.products.length > 0 ? props.products.map((item) => (
								<li key={`product-${item.id}-item`}>
									<div className="product">
										<a href={`#/${item._id}`} onClick={() => openModal(item)}>
											<img src={item.image} alt={item.title}></img>
											<p>{item.title}</p>
										</a>
										<div className="product-price">
											<div>
												{formatCurrency(item.price)}
											</div>
											<button className="button primary" onClick={() => props.addToCart(item)}>
												Add to cart
											</button>
										</div>
									</div>
									</li>
									)) : "No data"}
							</ul>
							)
					}
			</Fade>
			{
				product && (
					<Modal isOpen={product ? true : false} ariaHideApp={false} onRequestClose={closeModal}>
						<Zoom>
							<button className="close-modal" onClick={closeModal}>
								x
							</button>
							<div className="product-details">
								<img src={product.image} alt={product.title}></img>
								<div className="product-details-description">
									<p>
										<strong>
											{product.title}
										</strong>
									</p>				
									<p>
										{product.description}
									</p>
									<p>
										Avaiable sizes: {" "}
										{
											product.availableSizes.map((x, i)=>(
												<span key={`${i}-available-sizes-${x}`}>{" "} <button className="button">{x}</button></span>
												))
											}
									</p>
									<div className="product-price">
										<div>{formatCurrency(product.price)}</div>
										<button className="button primary" onClick={(e) => {
											props.addToCart(product);
											closeModal();
											}}>
											Add to Cart
										</button>
									</div>
								</div>
							</div>
						</Zoom>
					</Modal>
					)
				}
		</div>
	)
};

export default connect((state) => ({products: state.products.filteredItems}), {fetchProducts})(Products);

