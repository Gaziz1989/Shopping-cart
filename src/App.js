import {useState, useEffect} from 'react';
import data from "./data.json";
import Products from "./components/Products"
function App() {
	const [products, setProducts] = useState(data.products)
	const [size, setSize] = useState("")
	const [sort, setSort] = useState("")

	const getProducts = () => {
		setProducts(data.products)
	}
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
