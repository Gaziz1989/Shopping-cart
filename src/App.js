import {useState, useEffect} from 'react';
import data from "./data.json";
import Products from "./components/Products"
import Filter from "./components/Filter"

function App() {
	const [products, setProducts] = useState(data.products);
	const [size, setSize] = useState("ALL");
	const [sort, setSort] = useState("Latest");

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
		});
		setProducts(t);
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
						<Products products={products}></Products>		
					</div>
					<div className="sidebar">
						Card Items
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
