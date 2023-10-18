import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

function createData(color, colorName, imageURL) {
	return { color, colorName, imageURL };
}

const rows = [
	createData(
		"rgb(25,35,98)",
		"Blue",
		"https://houseandcask.com/wp-content/uploads/LTM7204-PC-20-oz-Royal-Blue-Ringneck-Vacuum-Insulated-Tumbler-w-Clear-Lid.png"
	),
];

export default function ColorsTable({ setOpenColorInput }) {
	return (
		<TableContainer component={Paper}>
			<Table aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Color</TableCell>
						<TableCell style={{ whiteSpace: "nowrap" }}>
							Color Name
						</TableCell>
						<TableCell>
							image URL
							<Button
								style={{
									marginLeft: "15px",
									backgroundColor: "green",
								}}
								variant="contained"
								size="small"
								onClick={() => setOpenColorInput(true)}
							>
								Add Color
							</Button>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow
							key={row.name}
							sx={{
								"&:last-child td, &:last-child th": {
									border: 0,
								},
							}}
						>
							<TableCell component="th" scope="row">
								{row.color}
							</TableCell>
							<TableCell>{row.colorName}</TableCell>
							<TableCell
								style={{
									display: "inline",
								}}
							>
								{row.imageURL}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
