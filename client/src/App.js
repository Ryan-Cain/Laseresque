import { useState } from "react";
import Navbar from "./components/Navbar";
import { Box, Stack } from "@mui/material";
import Sidebar from "./components/Sidebar";
import ShopAllCategories from "./components/ShopAllCategories";
import ShopCategory from "./components/ShopCategory";
import ShopItem from "./components/ShopItem";
import ShopCart from "./components/ShopCart";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
	const [sideCartOpen, setSideCartOpen] = useState(false);
	return (
		<Box>
			<Navbar />
			<Stack direction="row" spacing={2} justifyContent="flex-start">
				<Sidebar sideCartOpen={sideCartOpen} />
				<Routes>
					<Route
						path="/shop"
						element={
							<ShopAllCategories
								setSideCartOpen={setSideCartOpen}
							/>
						}
					/>
					<Route
						path="/shop/:category"
						element={
							<ShopCategory setSideCartOpen={setSideCartOpen} />
						}
					/>
					<Route
						path="/shop/:item/:color"
						element={<ShopItem setSideCartOpen={setSideCartOpen} />}
					/>
					<Route
						path="/shop/cart"
						element={<ShopCart setSideCartOpen={setSideCartOpen} />}
					/>
				</Routes>
			</Stack>
		</Box>
	);
}

export default App;
