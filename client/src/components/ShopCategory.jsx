import { useEffect } from "react";
import { Grid, Container } from "@mui/material";
import { Link } from "react-router-dom";
import ItemCardColor from "./ItemCardColor";

const categoryStaticInfo = {
	name: "Tumblers",
	items: [
		{
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
		},
		{
			name: "20oz Tumbler",
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
		},
		{
			name: "24oz Tumbler",
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
		},
	],
};

const ShopCategory = ({ setSideCartOpen }) => {
	useEffect(() => {
		setSideCartOpen(true);
	}, []);
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
					<Link to={"/shop/" + categoryStaticInfo.name}>
						<h2 style={{ margin: "10px 0", color: "blue" }}>
							{categoryStaticInfo.name}
						</h2>
					</Link>
				</Grid>
				{categoryStaticInfo.items.map((item, idx) => {
					return (
						<Grid item key={idx} xs={4}>
							<ItemCardColor item={item} />
						</Grid>
					);
				})}
			</Grid>
		</Container>
	);
};

export default ShopCategory;
