import {useState, useEffect} from 'react';
// import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Carts from "./components/Carts";
import store from "./store.js";
import {Provider} from "react-redux";

function App() {
	// const [products, setProducts] = useState(data.products);
	// const [size, setSize] = useState("ALL");
	// const [sort, setSort] = useState("Latest");
	const [cartItems, setCartArr] = useState(localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []);

	// const getProducts = () => {
	// 	setProducts(data.products);
	// };

	// const filterProducts = (event) => {
	// 	setSize(event.target.value);
	// 	if (event.target.value === "ALL") {
	// 		setProducts(data.products);
	// 	} else {
	// 		setProducts(data.products.filter((item)=> item.availableSizes.indexOf(event.target.value) >= 0));
	// 	}
	// };

	// const sortProducts = (event) => {
	// 	setSort(event.target.value);
	// 	const t = products.slice().sort((a, b) => {
	// 		if (event.target.value === "Lowest") {
	// 			return a.price > b.price ? 1 : -1
	// 		} else if (event.target.value === "Highest") {
	// 			return a.price < b.price ? 1 : -1
	// 		} else if (event.target.value === "Latest") {
	// 			return a._id > b._id ? 1 : -1
	// 		}
	// 		return a._id > b._id ? 1 : -1 
	// 	});
	// 	setProducts(t);
	// };

	const addToCart = (product) => {
		const items = cartItems.slice(0);
		let alreadyInCart = false;
		items.forEach((item) => {
			if (item._id === product._id) {
				item.count++;
				alreadyInCart = true;
			};
		});
		if (!alreadyInCart) {
			items.push({...product, count: 1});
		};
		setCartArr(items);
		localStorage.setItem("cartItems", JSON.stringify(items));
	};

	const removeFromCart = (product) => {
		const items = cartItems.slice(0);
		const tmp = items.filter(x => x._id !== product._id);
		setCartArr(tmp);
		localStorage.setItem("cartItems", JSON.stringify(tmp));
	};

	const createOrder = (order) => {
		alert("Hey There " + order.name);
	};

	useEffect(() => {
		// getProducts();
	}, []);

	return (
		<Provider store={store}>
			<div className="grid-container">
				<header>
					<a href="/">Gaziz React Shopping Cart</a>
				</header>
				<main>
					<div className="content">
						<div className="main">
							<Filter></Filter>
							<Products addToCart={addToCart}></Products>		
						</div>
						<div className="sidebar">
							<Carts cartItems={cartItems} removeFromCart={removeFromCart} createOrder={createOrder}></Carts>
						</div>
					</div>
				</main>
				<footer>
					All right is reserved
				</footer>
				</div>
		</Provider>
			);
}

export default App;
