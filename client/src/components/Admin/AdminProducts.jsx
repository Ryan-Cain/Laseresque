import React from "react";
import ProductDataTable from "./ProductDataTable";
import { Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AdminProducts = () => {
	return (
		<div>
			<h2>View Products</h2>
			<Stack direction="row">
				<Button
					variant="contained"
					size="large"
					startIcon={<AddIcon />}
				>
					Add Product
				</Button>
			</Stack>
			<ProductDataTable />
		</div>
	);
};

export default AdminProducts;
