import React from "react";
import SingleApprovalDataTable from "./SingleApprovalDataTable";
import { Button, Stack, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AdminProducts = () => {
	const navigate = useNavigate();
	const orderStatic = {
		orderNumber: "fiseofnoi320wfn",
		user: {
			username: "hunter12",
			email: "hunting4ever@email.com",
		},
		items: [
			{ name: "16oz tumbler", color: "blue", quantity: 2, price: 15 },
			{ name: "Military Coaster", color: "n/a", quantity: 4, price: 5 },
		],
	};
	return (
		<Container style={{ marginTop: "15px" }}>
			<h2>Approval # {orderStatic.orderNumber}</h2>
			<h2 style={{ margin: "15px 0" }}>
				User: {orderStatic.user.username}
			</h2>
			<Stack direction="row"></Stack>
			<SingleApprovalDataTable order={orderStatic} />
			<h2 style={{ marginBottom: "15px" }}>Total is $ {40}</h2>
			<Button
				variant="contained"
				size="large"
				sx={{ marginRight: "25px", backgroundColor: "green" }}
				onClick={() => navigate(-1)}
			>
				Go Back
			</Button>
			<Button variant="contained" size="large">
				Approve Order
			</Button>
		</Container>
	);
};

export default AdminProducts;
