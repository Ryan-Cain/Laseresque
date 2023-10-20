import { useState } from "react";
import { Container, Grid } from "@mui/material";
import AddItemCardColor from "./AddItemCardColor";
import ProductForm from "./ProductForm";
import { Paper, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewProduct = ({ products, setProducts, categories }) => {
	const navigate = useNavigate();
	const [newItem, setNewItem] = useState({
		name: "",
		nameEndpoint: "",
		price: null,
		quantity: null,
		hasColors: false,
		hasCustomText: false,
		category: "",
		colors: [],
		images: [],
		customText: [],
	});
	// This function removes the spaces from the displayable categoryname and makes it all lowercase
	function removeSpacesMakeLowercase(productName) {
		return productName.split(" ").join("").toLowerCase();
	}
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
			nameEndpoint: removeSpacesMakeLowercase(newItem.name),
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
	const [customTextLine, setCustomTextLine] = useState({
		customLineName: "",
		customLineNameNoSpace: "",
		maxCharLength: "",
	});
	const customTextChange = (e) => {
		console.log(e);
		setCustomTextLine({
			...customTextLine,
			[e.target.name]: e.target.value,
			customLineNameNoSpace:
				e.target.name === "customLineName"
					? removeSpacesMakeLowercase(e.target.value)
					: customTextLine.customLineName,
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

	return (
		<Container>
			<h2 style={{ margin: "15px 0" }}>New Product</h2>
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
					<ProductForm
						colorChange={colorChange}
						itemChange={itemChange}
						addColor={addColor}
						newItem={newItem}
						addCustomText={addCustomText}
						customTextChange={customTextChange}
						createProduct={createProduct}
						categories={categories}
					/>
				</Grid>
			</Grid>
			{JSON.stringify(customTextLine)}
		</Container>
	);
};

export default NewProduct;
