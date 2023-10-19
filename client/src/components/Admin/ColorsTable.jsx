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

export default function ColorsTable({
	openColorInput,
	setOpenColorInput,
	newItem,
	disabled,
}) {
	// const rows = [];
	const rows = newItem.colors.map((item) => {
		return createData(item.color, item.colorName, item.imageURL);
	});
	// const rows = [
	// 	createData(
	// 		"rgb(25,35,98)",
	// 		"Blue",
	// 		"https://houseandcask.com/wp-content/uploads/LTM7204-PC-20-oz-Royal-Blue-Ringneck-Vacuum-Insulated-Tumbler-w-Clear-Lid.png"
	// 	),
	// ];
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
							Image URL
							<Button
								onClick={() =>
									setOpenColorInput(!openColorInput)
								}
								style={{
									marginLeft: "45px",
									backgroundColor: "green",
									color: "white",
									visibility: disabled ? "hidden" : "visible",
								}}
								variant="contained"
								size="small"
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
								<p
									style={{
										backgroundColor: row.color,
										width: "75px",
										height: "25px",
										border: "black 2px solid",
									}}
								></p>
							</TableCell>
							<TableCell>{row.colorName}</TableCell>
							<TableCell>{row.imageURL}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
