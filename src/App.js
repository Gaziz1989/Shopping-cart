// import {useState, useEffect} from 'react';
// import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Carts from "./components/Carts";
import store from "./store.js";
import {Provider} from "react-redux";

function App() {
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
							<Products></Products>		
						</div>
						<div className="sidebar">
							<Carts></Carts>
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
