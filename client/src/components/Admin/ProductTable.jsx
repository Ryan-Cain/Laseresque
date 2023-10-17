import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

function createData(
	category,
	item,
	img,
	quantity,
	lastUpdated,
	price,
	actions
) {
	return { category, item, img, quantity, lastUpdated, price, actions };
}

const rows = [
	createData(
		"Coasters",
		"Coastguard Coaster",
		"https://www.laseresque.com/images/products/thumbs/co-rc-101ab-01.png",
		20,
		"updated at",
		5,
		"edit | delete"
	),
	createData(
		"Tumbler",
		"16oz Tumbler",
		"https://www.laseresque.com/images/products/thumbs/co-rc-101ab-01.png",
		12,
		"updated at",
		25,
		"edit | delete"
	),
	createData(
		"Coasters",
		"Coastguard Coaster",
		"https://www.laseresque.com/images/products/thumbs/co-rc-101ab-01.png",
		20,
		"updated at",
		5,
		"edit | delete"
	),
];

export default function CategoryTable() {
	return (
		<Box>
			<Button variant="contained" size="large">
				Add Category
			</Button>
			<TableContainer component={Paper} style={{ marginTop: "25px" }}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Categories</TableCell>
							<TableCell>Item</TableCell>
							<TableCell>Quantity of items</TableCell>
							<TableCell>Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row, idx) => (
							<TableRow key={idx}>
								{/* <TableCell component="th" scope="row">
								<p>{row.item}</p>
							</TableCell> */}
								<TableCell>{row.category}</TableCell>
								<TableCell>{row.quantity}</TableCell>
								<TableCell>{row.actions}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
}
