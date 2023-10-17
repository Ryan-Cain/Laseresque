import React from "react";
import ApprovalsDataTable from "./ApprovalsDataTable";
import { Button, Stack, Container } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AdminProducts = () => {
	return (
		<Container>
			<h2 style={{ margin: "15px 0" }}>View Approvals</h2>
			<ApprovalsDataTable />
		</Container>
	);
};

export default AdminProducts;
