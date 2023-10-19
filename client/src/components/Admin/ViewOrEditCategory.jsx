import { useState } from "react";
import { Container, Grid } from "@mui/material";
import AddItemCardColor from "./AddItemCardColor";
import ProductForm from "./ProductForm";
import { Paper, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AddCategoryImageCard from "./AddCategoryImageCard";
import CategoryForm from "./CategoryForm";

const ViewOrEditCategory = ({ categories, setCategories }) => {
	const navigate = useNavigate();
	const [newCategory, setNewCategory] = useState({
		category: "",
		imageURL: "",
	});
	const itemChange = (e) => {
		e.preventDefault();
		console.log(e.target.name);
		const { name, value } = e.target;
		setNewCategory({
			...newCategory,
			[name]: value,
		});
	};

	// send request to create product
	const createCategory = () => {
		axios
			.post("http://localhost:8000/api/categories", newCategory)
			.then((res) => {
				console.log(res.data);
				setCategories([...categories, res.data]);
				navigate("/admin/categories");
			})
			.catch((err) => {
				console.log(err);
				const errorResponse = err.response.data.errors;
				console.log(errorResponse);
			});
	};

	return (
		<Container>
			<h2 style={{ margin: "15px 0" }}>New Category</h2>
			<Button
				style={{ marginBottom: "10px" }}
				variant="contained"
				size="large"
				startIcon={<ArrowBackIcon />}
				onClick={() => navigate(-1)}
			>
				Back
			</Button>
			<Grid
				container
				style={{
					backgroundColor: "white",
					marginTop: "15px",
					padding: "20px",
				}}
			>
				<Grid item xs={5}>
					<Paper elevation={12}>
						<AddCategoryImageCard newCategory={newCategory} />
					</Paper>
				</Grid>
				<Grid item xs={7}>
					<CategoryForm
						itemChange={itemChange}
						newCategory={newCategory}
						createCategory={createCategory}
					/>
				</Grid>
			</Grid>
		</Container>
	);
};

export default ViewOrEditCategory;
