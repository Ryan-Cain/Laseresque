import React from "react";
import ProductDataTable from "./ProductDataTable";
import { Button, Stack, Container } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

const AdminProducts = () => {
	const navigate = useNavigate();
	return (
		<Container>
			<h2 style={{ margin: "15px 0" }}>View Products</h2>
			<Button
				style={{ marginBottom: "20px" }}
				variant="contained"
				size="large"
				startIcon={<AddIcon />}
				onClick={() => navigate("/admin/products/new")}
			>
				New Product
			</Button>
			<ProductDataTable />
		</Container>
	);
};

export default AdminProducts;
