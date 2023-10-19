import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

function createData(category, imageURL, quantity, id) {
	return { category, imageURL, quantity, id };
}

export default function CategoryTable({ categories }) {
	const navigate = useNavigate();
	const rows = categories.map((category) => {
		return createData(
			category.category,
			category.imageURL,
			category.quantity,
			category.id
		);
	});
	return (
		<Container>
			<h2 style={{ margin: "15px 0" }}>View Categories</h2>
			<Button
				variant="contained"
				size="large"
				startIcon={<AddIcon />}
				onClick={() => navigate("/admin/categories/new")}
			>
				New Category
			</Button>
			<TableContainer component={Paper} style={{ marginTop: "25px" }}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Category</TableCell>
							<TableCell>Category Image</TableCell>
							<TableCell>Items per category</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row, idx) => (
							<TableRow key={idx}>
								{/* <TableCell component="th" scope="row">
								<p>{row.item}</p>
							</TableCell> */}
								<TableCell style={{ padding: "5px 16px" }}>
									{row.category}
								</TableCell>
								<TableCell style={{ padding: "5px 16px" }}>
									<img
										src={row.imageURL}
										alt={row.category}
										style={{ height: "100px" }}
									/>
								</TableCell>
								<TableCell style={{ padding: "5px 16px" }}>
									{row.quantity}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Container>
	);
}
