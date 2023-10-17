import { useState } from "react";
import AdminNavbar from "./components/Admin/AdminNavbar";
import { Box, Stack } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AdminSidebar from "./components/Admin/AdminSidebar";
import CategoryTable from "./components/Admin/CategoryTable";
import AdminProducts from "./components/Admin/AdminProducts";

function App() {
	return (
		<Box>
			<AdminNavbar />
			<Stack direction="row" spacing={2} justifyContent="flex-start">
				<AdminSidebar />
				<Routes>
					<Route
						path="/admin/categories"
						element={<CategoryTable />}
					/>
					<Route path="/admin/products" element={<AdminProducts />} />
				</Routes>
			</Stack>
		</Box>
	);
}

export default App;
