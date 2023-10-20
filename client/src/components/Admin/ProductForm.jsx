import { useState } from "react";
import { Container, Stack, Button, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ColorsTable from "./ColorsTable";
import AddIcon from "@mui/icons-material/Add";
import CustomTextTable from "./CustomTextTable";
import InputLabel from "@mui/material/InputLabel";
import ClearIcon from "@mui/icons-material/Clear";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ProductForm = ({
	colorChange,
	itemChange,
	addColor,
	newItem,
	customTextChange,
	addCustomText,
	createProduct,
	editing,
	setEditing,
	editProduct,
	categories,
}) => {
	const [openColorInput, setOpenColorInput] = useState(false);
	const [openCustomTextInput, setOpenCustomTextInput] = useState(false);

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
										onChange={(e) => itemChange(e)}
									>
										{categories.map((category) => {
											return (
												<MenuItem
													key={category._id}
													value={
														category.categoryEndpoint
													}
												>
													{category.category}
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
								onChange={itemChange}
								control={<Checkbox />}
								name="hasColors"
								label="Has Colors?"
							/>
							<FormControlLabel
								checked={newItem.hasCustomText}
								onChange={itemChange}
								control={<Checkbox />}
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
									disabled={false}
								/>
								{openColorInput && (
									<Stack
										direction="row"
										style={{
											alignItems: "center",
											marginTop: "15px",
											paddingLeft: "15px",
											paddingBottom: "15px",
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
									disabled={false}
								/>
								{openCustomTextInput && (
									<Stack
										direction="row"
										style={{
											alignItems: "center",
											margin: "15px 0",
											paddingLeft: "15px",
										}}
									>
										<AddCircleIcon
											onClick={(e) => {
												addCustomText(e);
												setOpenCustomTextInput(
													!openCustomTextInput
												);
											}}
										/>
										<div
											style={{
												display: "flex",
												flexDirection: "column",
												margin: "0 15px",
											}}
										>
											<label>Custom Line Name</label>
											<TextField
												onChange={(e) =>
													customTextChange(e)
												}
												id="outlined-basic"
												name="customLineName"
												variant="outlined"
											/>
										</div>
										<div
											style={{
												display: "flex",
												flexDirection: "column",
											}}
										>
											<label>Max Character Length</label>
											<TextField
												onChange={(e) =>
													customTextChange(e)
												}
												name="maxCharLength"
												id="outlined-basic"
												variant="outlined"
											/>
										</div>
									</Stack>
								)}
							</Stack>
						</Paper>
					)}
					{editing ? (
						<div style={{ display: "flex", alignSelf: "flex-end" }}>
							<Button
								style={{
									width: "fit-content",
									alignSelf: "flex-end",
									margin: "20px 0 0 0",
								}}
								variant="contained"
								size="large"
								startIcon={<ClearIcon />}
								onClick={() => setEditing(false)}
							>
								Cancel
							</Button>
							<Button
								style={{
									width: "fit-content",
									alignSelf: "flex-end",
									margin: "20px 0 0 25px",
								}}
								variant="contained"
								size="large"
								startIcon={<SaveAltIcon />}
								onClick={editProduct}
							>
								Save Changes
							</Button>
						</div>
					) : (
						<Button
							style={{
								width: "fit-content",
								alignSelf: "flex-end",
								margin: "20px 0 0 0",
							}}
							variant="contained"
							size="large"
							startIcon={<AddIcon />}
							onClick={createProduct}
						>
							Add Product
						</Button>
					)}
				</Stack>
			</form>
		</Container>
	);
};

export default ProductForm;
