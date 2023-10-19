import { useState } from "react";
import { Container, Stack, Button, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ColorsTable from "./ColorsTable";
import AddIcon from "@mui/icons-material/Add";
import CustomTextTable from "./CustomTextTable";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ProductViewForm = ({
	colorChange,
	itemChange,
	addColor,
	newItem,
	customTextChange,
	addCustomText,
	createProduct,
	setEditing,
}) => {
	const [openColorInput, setOpenColorInput] = useState(false);
	const [openCustomTextInput, setOpenCustomTextInput] = useState(false);

	const categories = [
		{ displayName: "Coasters", name: "coasters" },
		{ displayName: "Mugs", name: "mugs" },
		{ displayName: "Tumblers", name: "tumblers" },
	];

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
									value={newItem.name}
									variant="outlined"
									InputProps={{ readOnly: true }}
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
									InputProps={{ readOnly: true }}
									placeholder="0"
									value={newItem.price}
									variant="outlined"
								/>
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									// padding: "0 15px",
									// paddingRight: "15px",
									width: "fitContent",
								}}
							>
								<label>Quantity in stock</label>
								<TextField
									onChange={(e) => itemChange(e)}
									placeholder="0"
									id="outlined-basic"
									type="number"
									InputProps={{ readOnly: true }}
									name="quantity"
									value={newItem.quantity}
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
								<label>Category</label>
								<FormControl>
									<Select
										id="demo-simple-select"
										value={newItem.category}
										name="category"
										InputProps={{ readOnly: true }}
										onChange={(e) => itemChange(e)}
									>
										{categories.map((category, idx) => {
											return (
												<MenuItem
													key={idx}
													value={category.name}
												>
													{category.displayName}
												</MenuItem>
											);
										})}
									</Select>
								</FormControl>
							</div>
						</Stack>
						<div
							style={{
								display: "flex",
							}}
						>
							<FormControlLabel
								checked={newItem.hasColors}
								// onChange={itemChange}
								control={<Checkbox />}
								InputProps={{ readOnly: true }}
								name="hasColors"
								label="Has Colors?"
							/>
							<FormControlLabel
								checked={newItem.hasCustomText}
								// onChange={itemChange}
								control={<Checkbox />}
								InputProps={{ readOnly: true }}
								name="hasCustomText"
								label="Has Custom Text?"
							/>
						</div>
					</Paper>
					{newItem.hasColors && (
						<Paper
							elevation={12}
							style={{
								marginBottom: "15px",
							}}
						>
							<h3 style={{ padding: "10px 0 0 10px" }}>Colors</h3>
							<Stack>
								{/* <label>Colors</label> */}
								<ColorsTable
									openColorInput={openColorInput}
									setOpenColorInput={setOpenColorInput}
									newItem={newItem}
									disabled={true}
								/>
							</Stack>
						</Paper>
					)}
					{newItem.hasCustomText && (
						<Paper
							style={{
								marginBottom: "15px",
								padding: "10px 10px 0 10px",
							}}
							elevation={12}
						>
							<h3>Custom Text</h3>
							<Stack>
								<CustomTextTable
									customText={newItem.customText}
									openCustomTextInput={openCustomTextInput}
									setOpenCustomTextInput={
										setOpenCustomTextInput
									}
									disabled={true}
								/>
							</Stack>
						</Paper>
					)}
					<Button
						style={{
							width: "fit-content",
							alignSelf: "flex-end",
							margin: "20px 0 0 0",
						}}
						variant="contained"
						size="large"
						startIcon={<EditIcon />}
						onClick={() => setEditing(true)}
					>
						Edit Product
					</Button>
				</Stack>
			</form>
		</Container>
	);
};

export default ProductViewForm;
