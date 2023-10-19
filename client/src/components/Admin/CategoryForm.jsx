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
import NewCategory from "./NewCategory";

const CategoryForm = ({
	itemChange,
	newCategory,
	createCategory,
	editing,
	setEditing,
}) => {
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
									marginRight: "25px",
								}}
							>
								<label>Category Name</label>
								<TextField
									onChange={(e) => itemChange(e)}
									id="outlined-basic"
									name="category"
									value={newCategory.category}
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
									onChange={(e) => itemChange(e)}
									id="outlined-basic"
									name="imageURL"
									value={newCategory.imageURL}
									variant="outlined"
								/>
							</div>
						</Stack>
					</Paper>
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
								onClick={createCategory}
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
							onClick={createCategory}
						>
							Add Category
						</Button>
					)}
				</Stack>
			</form>
		</Container>
	);
};

export default CategoryForm;
