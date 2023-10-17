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

function createData(category, url, quantity, actions) {
	return { category, url, quantity, actions };
}

const rows = [
	createData(
		"Coasters",
		"https://i.etsystatic.com/5876407/r/il/1369ba/2107571671/il_fullxfull.2107571671_aq1m.jpg",
		20,
		"edit | delete"
	),
	createData(
		"Glasware",
		"https://www.edco.com/images/thumbs/0034259_custom-engraved-supplied-glassware_600.jpeg",
		4,
		"edit | delete"
	),
	createData(
		"Misc",
		"https://www.laseresque.com/images/products/thumbs/cb-08-cori.png",
		1,
		"edit | delete"
	),
	createData(
		"Mugs",
		"https://emmalinebride.com/marketplace/wp-content/uploads/Bass-Beer-Mug-Personalized.jpg",
		5,
		"edit | delete"
	),
	createData(
		"Plaques",
		"https://i.etsystatic.com/11978219/r/il/1bd1f1/1744070773/il_794xN.1744070773_bhj4.jpg",
		1,
		"edit | delete"
	),
	createData(
		"Tumblers",
		"https://www.mdengravinggifts.com/uploads/9/4/5/9/94594675/30-oz-full-set_2.jpg",
		6,
		"edit | delete"
	),
];

export default function CategoryTable() {
	return (
		<Container>
			<h2 style={{ margin: "15px 0" }}>View Categories</h2>
			<Button variant="contained" size="large" startIcon={<AddIcon />}>
				New Category
			</Button>
			<TableContainer component={Paper} style={{ marginTop: "25px" }}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Category</TableCell>
							<TableCell>Category Image</TableCell>
							<TableCell>Items per category</TableCell>
							<TableCell>Actions</TableCell>
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
										src={row.url}
										alt={row.category}
										style={{ height: "100px" }}
									/>
								</TableCell>
								<TableCell style={{ padding: "5px 16px" }}>
									{row.quantity}
								</TableCell>
								<TableCell style={{ padding: "5px 16px" }}>
									{row.actions}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Container>
	);
}
