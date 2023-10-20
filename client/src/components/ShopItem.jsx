import { useEffect, useState } from "react";
import { Stack, Box, Grid, Item, Container } from "@mui/material";
import { Link } from "react-router-dom";
import ItemCardColor from "./ItemCardColor";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useParams } from "react-router-dom";

const ShopItem = ({ setSideCartOpen, categories, userCart, setUserCart }) => {
	const { productName, category } = useParams();
	const [product, setProduct] = useState({});
	const categoryName = categories.filter((cat) => {
		return cat.categoryEndpoint === category;
	});
	useEffect(() => {
		setSideCartOpen(true);
		axios
			.get("http://localhost:8000/api/category/" + productName)
			.then((res) => {
				setProduct({ ...res.data, userQuantity: 1 });
			});
	}, []);
	// This function removes the spaces from the displayable categoryname and makes it all lowercase
	function removeSpacesMakeLowercase(name) {
		return name.split(" ").join("").toLowerCase();
	}

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		console.log(e.target);
		// const customText = product.customText.filter(product => )
		setProduct({
			...product,
			[name]: value,
		});
	};

	return (
		<>
			{product.name ? (
				<Container>
					<div
						item
						// xs={12}
						style={{
							display: "flex",
							alignItems: "center",
						}}
					>
						<Link to="/shop">
							<h2 style={{ margin: "10px 0", color: "blue" }}>
								Categories
							</h2>
						</Link>
						<span
							style={{
								padding: "0 15px 0 15px",
								fontSize: "24px",
								color: "blue",
							}}
						>
							{">"}
						</span>
						<Link to={"/shop/" + product.category}>
							<h2 style={{ margin: "10px 0", color: "blue" }}>
								{categoryName[0].category}
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
						<Link
							to={
								"/shop/" + product.category + "/" + product.name
							}
						>
							<h2 style={{ margin: "10px 0", color: "blue" }}>
								{product.name}
							</h2>
						</Link>
					</div>
					<Grid
						container
						spacing={2}
						sx={{ backgroundColor: "white", marginTop: "25px" }}
					>
						<Grid item xs={6}>
							<ItemCardColor
								item={product}
								showColorName={true}
							/>
						</Grid>
						<Grid item xs={6}>
							<Box
								component="form"
								sx={{
									"& > :not(style)": { m: 1, width: "25ch" },
								}}
								noValidate
								autoComplete="off"
							>
								<h2>Custom Text</h2>
								{product.hasCustomText &&
									product.customText.map((line, idx) => {
										return (
											<div key={idx}>
												<p>{line.customLineName}:</p>
												<TextField
													id="outlined-basic"
													onChange={handleInputChange}
													name={
														line.customLineNameNoSpace
													}
													variant="outlined"
												/>
											</div>
										);
									})}

								<p>Quantity:</p>
								<TextField
									type="number"
									defaultValue="1"
									name="userQuantity"
									onChange={handleInputChange}
									id="outlined-basic"
									// label="Quantity"
									variant="outlined"
								/>
								<br />
								<Button
									variant="contained"
									size="large"
									onClick={() =>
										setUserCart([...userCart, product])
									}
								>
									Add to cart
								</Button>
							</Box>
						</Grid>
					</Grid>
				</Container>
			) : (
				<div>none</div>
			)}
		</>
	);
};

export default ShopItem;
