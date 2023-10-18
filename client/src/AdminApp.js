import { useState } from "react";
import AdminNavbar from "./components/Admin/AdminNavbar";
import { Box, Stack } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import AdminSidebar from "./components/Admin/AdminSidebar";
import CategoryTable from "./components/Admin/CategoryTable";
import AdminProducts from "./components/Admin/AdminProducts";
import AdminApprovals from "./components/Admin/AdminApprovals";
import AdminSingleApproval from "./components/Admin/AdminSingleApproval";
import NewProduct from "./components/Admin/AddProduct";

function App() {
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
						element={<CategoryTable />}
					/>
					<Route path="/admin/products" element={<AdminProducts />} />
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
						path="/admin/products/new"
						element={<NewProduct />}
					/>
				</Routes>
			</Stack>
		</Box>
	);
}

export default App;
