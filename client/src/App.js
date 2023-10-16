import "./App.css";
import Navbar from "./components/Navbar";
import { Box, Stack } from "@mui/material";
import Sidebar from "./components/Sidebar";
import ShopAllCategories from "./components/ShopAllCategories";
import ShopCategory from "./components/ShopCategory";
import ShopItem from "./components/ShopItem";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<Box>
			<Navbar />
			<Stack direction="row" spacing={2} justifyContent="flex-start">
				<Sidebar />
				<Routes>
					<Route path="/shop" element={<ShopAllCategories />} />
					<Route path="/shop/:category" element={<ShopCategory />} />
					<Route path="/shop/:item/:color" element={<ShopItem />} />
				</Routes>
			</Stack>
		</Box>
	);
}

export default App;
