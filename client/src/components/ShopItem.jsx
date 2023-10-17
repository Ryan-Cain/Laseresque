import { useEffect } from "react";
import { Stack, Box, Grid, Item, Container } from "@mui/material";
import { Link } from "react-router-dom";
import ItemCardColor from "./ItemCardColor";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const itemStaticInfo = {
	name: "16oz Tumbler",
	category: "Tumblers",
	colorPick: true,
	colors: [
		{
			color: "blue",
			displayedColor: "Blue",
			img: "https://houseandcask.com/wp-content/uploads/LTM7204-PC-20-oz-Royal-Blue-Ringneck-Vacuum-Insulated-Tumbler-w-Clear-Lid.png",
		},
		{
			color: "orange",
			displayedColor: "Orange",
			img: "https://s3.amazonaws.com/images.ecwid.com/images/16075414/1151955304.jpg",
		},
		{
			color: "brown",
			displayedColor: "Brown",
			img: "https://s7d9.scene7.com/is/image/BedBathandBeyond/155322763231878p?wid=200&hei=200",
		},
		{
			color: "red",
			displayedColor: "Red",
			img: "https://www.trophykits.com/images/gt/LTM7203-1.jpg",
		},
	],
};

const ShopItem = ({ setSideCartOpen }) => {
	useEffect(() => {
		setSideCartOpen(true);
	});
	return (
		<Container>
			<Grid
				container
				spacing={2}
				sx={{ backgroundColor: "white", marginTop: "25px" }}
			>
				<Grid
					item
					xs={12}
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
							padding: "0 15px",
							fontSize: "24px",
							color: "blue",
						}}
					>
						{">"}
					</span>
					<Link to={"/shop/" + itemStaticInfo.category}>
						<h2 style={{ margin: "10px 0", color: "blue" }}>
							{itemStaticInfo.category}
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
							"/shop/" +
							itemStaticInfo.category +
							"/" +
							itemStaticInfo.name
						}
					>
						<h2 style={{ margin: "10px 0", color: "blue" }}>
							{itemStaticInfo.name}
						</h2>
					</Link>
				</Grid>
				<Grid item xs={6}>
					<ItemCardColor item={itemStaticInfo} showColorName={true} />
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
						<p>Line 1:</p>
						<TextField
							id="outlined-basic"
							// label="Line 1"
							variant="outlined"
						/>
						<p>Line 2:</p>
						<TextField
							id="outlined-basic"
							// label="Line 2"
							variant="outlined"
						/>
						<p>Line 3:</p>
						<TextField
							id="outlined-basic"
							// label="Line 3"
							variant="outlined"
						/>
						<p>Quantity:</p>
						<TextField
							type="number"
							defaultValue="1"
							id="outlined-basic"
							// label="Quantity"
							variant="outlined"
						/>
						<br />
						<Button variant="contained" size="large">
							Add to cart
						</Button>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default ShopItem;
