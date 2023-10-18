import { useState } from "react";
import { Container, Stack, Button, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ColorsTable from "./ColorsTable";
import AddIcon from "@mui/icons-material/Add";
import CustomTextTable from "./CustomTextTable";

const ProductForm = ({ colorChange, itemChange, addColor }) => {
	const [openColorInput, setOpenColorInput] = useState(false);
	// const submitColor = (e) => {
	// 	e.preventDefault();

	// }
	return (
		<Container>
			<form>
				<Stack>
					<Paper
						style={{ marginBottom: "15px", padding: "10px" }}
						elevation={12}
					>
						<h3>Initial</h3>
						<Stack direction="row">
							<div
								style={{
									display: "flex",
									flexDirection: "column",
								}}
							>
								<label>Product Name</label>
								<TextField
									onChange={(e) => itemChange(e)}
									id="outlined-basic"
									name="name"
									variant="outlined"
								/>
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									padding: "0 15px",
								}}
							>
								<label>Price</label>
								<TextField
									onChange={(e) => itemChange(e)}
									id="outlined-basic"
									type="number"
									name="price"
									defaultValue={0}
									variant="outlined"
								/>
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
								}}
							>
								<FormControlLabel
									control={<Checkbox />}
									label="Has Colors?"
								/>
								<FormControlLabel
									control={<Checkbox />}
									label="Has Custom Text?"
								/>
							</div>
						</Stack>
					</Paper>
					<Paper
						elevation={12}
						style={{ marginBottom: "15px", paddingBottom: "15px" }}
					>
						<h3 style={{ padding: "10px 0 0 10px" }}>Colors</h3>
						<Stack>
							{/* <label>Colors</label> */}
							<ColorsTable
								setOpenColorInput={setOpenColorInput}
							/>
							{openColorInput && (
								<Stack
									direction="row"
									style={{
										alignItems: "center",
										marginTop: "15px",
										paddingLeft: "15px",
									}}
								>
									<AddCircleIcon
										onClick={(e) => {
											addColor(e);
											setOpenColorInput(false);
										}}
									/>
									<div
										style={{
											display: "flex",
											flexDirection: "column",
											marginLeft: "15px",
										}}
									>
										<label>Color Picker</label>
										<input
											onChange={(e) => colorChange(e)}
											type="color"
											name="color"
											id=""
										/>
									</div>
									<div
										style={{
											display: "flex",
											flexDirection: "column",
											margin: "0 15px",
										}}
									>
										<label>Color Name</label>
										<TextField
											onChange={(e) => colorChange(e)}
											id="outlined-basic"
											name="colorName"
											variant="outlined"
										/>
									</div>
									<div
										style={{
											display: "flex",
											flexDirection: "column",
										}}
									>
										<label>Image URL</label>
										<TextField
											onChange={(e) => colorChange(e)}
											name="imageURL"
											id="outlined-basic"
											variant="outlined"
										/>
									</div>
								</Stack>
							)}
						</Stack>
					</Paper>
					<Paper elevation={12}>
						<Stack>
							<CustomTextTable />
						</Stack>
					</Paper>
					<Button
						style={{
							width: "fit-content",
							alignSelf: "flex-end",
							margin: "20px 0",
						}}
						variant="contained"
						size="large"
						startIcon={<AddIcon />}
					>
						Add Product
					</Button>
				</Stack>
			</form>
		</Container>
	);
};

export default ProductForm;
