import React from "react";
import { Container, Grid } from "@mui/material";
import AddItemCardColor from "./AddItemCardColor";
import ProductForm from "./ProductForm";
import { Paper } from "@mui/material";

const AddProduct = () => {
	const item = {
		name: "16oz Tumbler",
		colorPick: true,
		colors: [
			{
				color: "blue",
				img: "https://houseandcask.com/wp-content/uploads/LTM7204-PC-20-oz-Royal-Blue-Ringneck-Vacuum-Insulated-Tumbler-w-Clear-Lid.png",
			},
			{
				color: "orange",
				img: "https://s3.amazonaws.com/images.ecwid.com/images/16075414/1151955304.jpg",
			},
			{
				color: "brown",
				img: "https://s7d9.scene7.com/is/image/BedBathandBeyond/155322763231878p?wid=200&hei=200",
			},
			{
				color: "red",
				img: "https://www.trophykits.com/images/gt/LTM7203-1.jpg",
			},
		],
	};

	return (
		<Container style={{ backgroundColor: "white", marginTop: "15px" }}>
			<h2 style={{ margin: "15px 0" }}>New Product</h2>
			<Grid container>
				<Grid item xs={5}>
					<Paper elevation={12}>
						<AddItemCardColor item={item} />
					</Paper>
				</Grid>
				<Grid item xs={7}>
					<ProductForm />
				</Grid>
			</Grid>
		</Container>
	);
};

export default AddProduct;
