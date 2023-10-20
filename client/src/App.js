import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Box, Stack } from "@mui/material";
import Sidebar from "./components/Sidebar";
import ShopAllCategories from "./components/ShopAllCategories";
import ShopCategory from "./components/ShopCategory";
import ShopItem from "./components/ShopItem";
import ShopCart from "./components/ShopCart";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

function App() {
	const [sideCartOpen, setSideCartOpen] = useState(false);
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [userCart, setUserCart] = useState([]);
	useEffect(() => {
		axios
			.get("http://localhost:8000/api/products")
			.then((res) => {
				setProducts(res.data);
			})
			.catch((err) => console.log(err));
		axios
			.get("http://localhost:8000/api/categories")
			.then((res) => {
				res.data.sort((a, b) => {
					let aCatName = a.category.toLowerCase();
					let bCatName = b.category.toLowerCase();
					return aCatName < bCatName
						? -1
						: aCatName > bCatName
						? 1
						: 0;
				});
				setCategories(res.data);
			})
			.catch((err) => console.log(err));
	}, []);
	const cartItems = userCart.length;
	return (
		<Box>
			<Navbar cartItems={cartItems} />
			<Stack direction="row" spacing={2} justifyContent="flex-start">
				<Sidebar
					sideCartOpen={sideCartOpen}
					categories={categories}
					userCart={userCart}
				/>
				<Routes>
					<Route
						path="/shop"
						element={
							<ShopAllCategories
								setSideCartOpen={setSideCartOpen}
								categories={categories}
							/>
						}
					/>
					<Route
						path="/shop/:category"
						element={
							<ShopCategory
								setSideCartOpen={setSideCartOpen}
								categories={categories}
							/>
						}
					/>
					<Route
						path="/shop/:category/:productName"
						element={
							<ShopItem
								setSideCartOpen={setSideCartOpen}
								categories={categories}
								userCart={userCart}
								setUserCart={setUserCart}
							/>
						}
					/>
					<Route
						path="/shop/cart"
						element={
							<ShopCart
								setSideCartOpen={setSideCartOpen}
								userCart={userCart}
							/>
						}
					/>
				</Routes>
			</Stack>
		</Box>
	);
}

export default App;
