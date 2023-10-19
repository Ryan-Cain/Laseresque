import { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import AddItemCardColor from "./AddItemCardColor";
import ProductForm from "./ProductForm";
import ProductViewForm from "./ProductViewForm";
import { Paper, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";

const ViewOrEditOneProduct = ({ products, setProducts }) => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [editing, setEditing] = useState(false);
	const [newItem, setNewItem] = useState({
		name: "",
		price: null,
		quantity: null,
		hasColors: false,
		hasCustomText: false,
		category: "",
		colors: [],
		images: [],
		customText: [],
	});
	const itemChange = (e) => {
		e.preventDefault();
		console.log(e.target.name);
		const { name, checked, value } = e.target;
		setNewItem({
			...newItem,
			[name]:
				name === "hasColors" || name === "hasCustomText"
					? checked
					: value,
		});
	};
	const [customColor, setCustomColor] = useState({});
	const colorChange = (e) => {
		console.log(e);
		setCustomColor({
			...customColor,
			[e.target.name]: e.target.value,
		});
		console.log(customColor);
	};
	const addColor = () => {
		const colors = [...newItem.colors, customColor];
		setNewItem({
			...newItem,
			colors,
		});
	};
	const [customTextLine, setCustomTextLine] = useState({});
	const customTextChange = (e) => {
		console.log(e);
		setCustomTextLine({
			...customTextLine,
			[e.target.name]: e.target.value,
		});
		console.log(customColor);
	};
	const addCustomText = () => {
		const customText = [...newItem.customText, customTextLine];
		setNewItem({
			...newItem,
			customText,
		});
		setCustomTextLine({});
	};
	// send request to create product
	const createProduct = () => {
		axios
			.post("http://localhost:8000/api/products", newItem)
			.then((res) => {
				console.log(res.data);
				setProducts([...products, res.data]);
				navigate("/admin/products");
			})
			.catch((err) => {
				console.log(err);
				const errorResponse = err.response.data.errors;
				console.log(errorResponse);
			});
	};

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/products/" + id)
			.then((res) => {
				setNewItem(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<Container>
			<h2 style={{ margin: "15px 0" }}>
				{editing ? "Edit" : "View"} Product
			</h2>
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
						<AddItemCardColor newItem={newItem} />
					</Paper>
				</Grid>
				<Grid item xs={7}>
					{editing ? (
						<ProductForm
							colorChange={colorChange}
							itemChange={itemChange}
							addColor={addColor}
							newItem={newItem}
							addCustomText={addCustomText}
							customTextChange={customTextChange}
							createProduct={createProduct}
							editing={editing}
							setEditing={setEditing}
						/>
					) : (
						<ProductViewForm
							colorChange={colorChange}
							itemChange={itemChange}
							addColor={addColor}
							newItem={newItem}
							addCustomText={addCustomText}
							customTextChange={customTextChange}
							createProduct={createProduct}
							setEditing={setEditing}
						/>
					)}
				</Grid>
			</Grid>
		</Container>
	);
};

export default ViewOrEditOneProduct;
