import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(item, customText, quantity, subtotal) {
	return { item, customText, quantity, subtotal };
}

const rows = [
	createData("20oz Tumbler", "this is custom text", 1, 25),
	createData("Wineglass stemmed", "this is custom text", 4, 28),
	createData("Airforce Coaster", "this is custom text", 10, 18),
	createData("Cutting board", "this is custom text", 1, 45),
];

export default function CartTable() {
	return (
		<TableContainer component={Paper} style={{ marginTop: "25px" }}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>
							Items (Click on name to edit item)
						</TableCell>
						<TableCell>Custom Text</TableCell>
						<TableCell>Quantity</TableCell>
						<TableCell align="right">Subtotal</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow
							key={row.item}
							sx={{
								"&:last-child td, &:last-child th": {
									border: 0,
								},
							}}
						>
							<TableCell
								component="th"
								scope="row"
								style={{
									display: "flex",
									alignItems: "center",
								}}
							>
								<img
									style={{ height: "50px" }}
									src="https://houseandcask.com/wp-content/uploads/LTM7204-PC-20-oz-Royal-Blue-Ringneck-Vacuum-Insulated-Tumbler-w-Clear-Lid.png"
									alt="tumbler"
								/>
								<p>{row.item}</p>
							</TableCell>
							<TableCell>{row.customText}</TableCell>
							<TableCell>{row.quantity}</TableCell>
							<TableCell align="right">{row.subtotal}</TableCell>
						</TableRow>
					))}
					<TableRow>
						<TableCell></TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
						<TableCell align="right">Total - $150</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
}
