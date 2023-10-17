import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

function createData(lineName, lineCharLength) {
	return { lineName, lineCharLength };
}

const rows = [createData("Top Line", 35)];

export default function CustomTextTable() {
	return (
		<TableContainer component={Paper}>
			<Table aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Custom Line Name</TableCell>
						<TableCell>
							Max Character Length
							<Button
								style={{
									marginLeft: "15px",
									backgroundColor: "green",
								}}
								variant="contained"
								size="small"
							>
								Add Line
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
								{row.lineName}
							</TableCell>
							<TableCell>{row.lineCharLength}</TableCell>
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
