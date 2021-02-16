import {useState, useEffect} from 'react';
import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Carts from "./components/Carts";

function App() {
	const [products, setProducts] = useState(data.products);
	const [size, setSize] = useState("ALL");
	const [sort, setSort] = useState("Latest");
	const [cartItems, setCartArr] = useState([])

	const getProducts = () => {
		setProducts(data.products);
	};

	const filterProducts = (event) => {
		setSize(event.target.value);
		if (event.target.value === "ALL") {
			setProducts(data.products);
		} else {
			setProducts(data.products.filter((item)=> item.availableSizes.indexOf(event.target.value) >= 0));
		}
	};

	const sortProducts = (event) => {
		setSort(event.target.value);
		const t = products.slice().sort((a, b) => {
			if (event.target.value === "Lowest") {
				return a.price > b.price ? 1 : -1
			} else if (event.target.value === "Highest") {
				return a.price < b.price ? 1 : -1
			} else if (event.target.value === "Latest") {
				return a._id > b._id ? 1 : -1
			}
			return a._id > b._id ? 1 : -1 
		});
		setProducts(t);
	};

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
			items.push({...product, count: 1})
		};
		setCartArr(items);
	};

	const removeFromCart = (product) => {
		const items = cartItems.slice(0);
		const tmp = items.filter(x => x._id !== product._id);
		setCartArr(tmp);
	};

	const proceedCartItems = () => {
		console.log(cartItems);
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<div className="grid-container">
			<header>
				<a href="/">Gaziz React Shopping Cart</a>
			</header>
			<main>
				<div className="content">
					<div className="main">
						<Filter count={products.length} size={size} sort={sort} filterProducts={filterProducts} sortProducts={sortProducts}></Filter>
						<Products products={products} addToCart={addToCart}></Products>		
					</div>
					<div className="sidebar">
						<Carts cartItems={cartItems} removeFromCart={removeFromCart} proceedCartItems={proceedCartItems}></Carts>
					</div>
				</div>
			</main>
			<footer>
				All right is reserved
			</footer>
			</div>
			);
}

export default App;
