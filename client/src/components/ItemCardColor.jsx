import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ColorButton = ({ color, setColor, currentColor }) => {
	return (
		<div
			onClick={() => setColor(color)}
			style={{
				backgroundColor: color.color,
				borderRadius: "50%",
				border: color.color === currentColor.color && "3px solid black",
				height: "25px",
				width: "25px",
				marginRight: "10px",
			}}
		></div>
	);
};

const ItemCardColor = ({ item, categoryName }) => {
	const [color, setColor] = useState(item.colors[0]);
	const navigate = useNavigate();
	console.log(item.price);
	return (
		<Card>
			<CardContent
				onClick={() =>
					navigate(`/shop/${item.category}/${item.nameEndpoint}`)
				}
			>
				<Typography gutterBottom variant="h5" component="div">
					{item.name} {item.hasColors && `(${color.colorName})`}
				</Typography>
			</CardContent>
			<CardMedia
				onClick={() =>
					navigate(`/shop/${item.category}/${item.nameEndpoint}`)
				}
				component="img"
				id="productCardImg"
				image={color.imageURL}
				alt={color.colorName}
			/>
			<CardContent>
				<Stack
					direction="row"
					sx={{
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
						}}
					>
						{item.colors.map((itemColor, idx) => {
							return (
								<ColorButton
									key={idx}
									currentColor={color}
									color={itemColor}
									setColor={setColor}
								/>
							);
						})}
						<p>(In stock)</p>
					</div>
					<h2>${item.price}</h2>
				</Stack>
			</CardContent>
		</Card>
	);
};

export default ItemCardColor;
