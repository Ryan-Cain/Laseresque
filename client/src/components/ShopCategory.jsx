import { useEffect, useState } from "react";
import { Grid, Container } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import ItemCardColor from "./ItemCardColor";
import axios from "axios";

const ShopCategory = ({ setSideCartOpen, categories }) => {
	const { category } = useParams();
	const categoryName = categories.filter((cat) => {
		return cat.categoryEndpoint === category;
	});
	console.log("cat name", categoryName);
	const [categoryProducts, setCategoryProducts] = useState([]);
	useEffect(() => {
		setSideCartOpen(true);
		axios
			.get("http://localhost:8000/api/products/" + category)
			.then((res) => {
				setCategoryProducts([...res.data]);
				console.log(res.data);
			});
	}, [category, setSideCartOpen]);
	return (
		<Container>
			<div
				style={{
					display: "flex",
					alignItems: "center",
				}}
			></div>
			{/* <h2 style={{ margin: "10px 0" }}>Categories</h2> */}
			<Grid container spacing={3}>
				<Grid
					item
					xs={12}
					style={{ display: "flex", alignItems: "center" }}
				>
					<Link to="/shop">
						<h2 style={{ margin: "10px 0", color: "blue" }}>
							Categories
						</h2>
					</Link>
					<span
						style={{
							padding: "0 15px",
							fontSize: "24px",
							color: "blue",
						}}
					>
						{">"}
					</span>
					<Link to={"/shop/" + category.name}>
						<h2 style={{ margin: "10px 0", color: "blue" }}>
							{categoryName[0].category}
						</h2>
					</Link>
				</Grid>
				{categoryProducts.map((product) => {
					return (
						<Grid item key={product._id} xs={4}>
							<ItemCardColor item={product} />
						</Grid>
					);
				})}
			</Grid>
		</Container>
	);
};

export default ShopCategory;
