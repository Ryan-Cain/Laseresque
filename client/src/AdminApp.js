import { useState, useEffect } from "react";
import AdminNavbar from "./components/Admin/AdminNavbar";
import { Box, Stack } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import AdminSidebar from "./components/Admin/AdminSidebar";
import CategoryTable from "./components/Admin/CategoryTable";
import AdminProducts from "./components/Admin/AdminProducts";
import AdminApprovals from "./components/Admin/AdminApprovals";
import AdminSingleApproval from "./components/Admin/AdminSingleApproval";
import NewProduct from "./components/Admin/NewProduct";
import axios from "axios";
import ViewOrEditOneProduct from "./components/Admin/ViewOrEditOneProduct";
import NewCategory from "./components/Admin/NewCategory";

function App() {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
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
				setCategories(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<Box>
			<AdminNavbar />
			<Stack
				direction="row"
				spacing={2}
				position="sticky"
				// justifyContent="center"
				// sx={{ width: "100vw" }}
			>
				<AdminSidebar />
				<Routes>
					<Route
						path="/admin/categories"
						element={<CategoryTable categories={categories} />}
					/>
					<Route
						path="/admin/products"
						element={<AdminProducts products={products} />}
					/>
					<Route
						path="/admin"
						element={<Navigate to="/admin/approvals" />}
					/>
					<Route
						path="/admin/approvals"
						element={<AdminApprovals />}
					/>
					<Route
						path="/admin/approvals/:orderNumber"
						element={<AdminSingleApproval />}
					/>
					<Route
						path="/admin/products/:id"
						element={
							<ViewOrEditOneProduct
								products={products}
								setProducts={setProducts}
							/>
						}
					/>
					<Route
						path="/admin/products/new"
						element={
							<NewProduct
								products={products}
								setProducts={setProducts}
							/>
						}
					/>
					<Route
						path="/admin/categories/new"
						element={
							<NewCategory
								categories={categories}
								setCategories={setCategories}
							/>
						}
					/>
				</Routes>
			</Stack>
		</Box>
	);
}

export default App;
