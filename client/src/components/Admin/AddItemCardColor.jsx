import { useState, useEffect } from "react";
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

const AddItemCardColor = ({ newItem }) => {
	const noColorState = {
		colorName: "No Color",
		imageURL:
			"https://www.stma.org/wp-content/uploads/2017/10/no-image-icon.png",
	};
	const [color, setColor] = useState(noColorState);

	const navigate = useNavigate();
	return (
		<Card>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{newItem.name ? newItem.name : "(No Name)"}{" "}
					{newItem.hasColors
						? newItem.colors.length > 0 &&
						  `(${newItem.colors[0].colorName})`
						: newItem.hasColors && color.colorName}
				</Typography>
			</CardContent>
			<CardMedia
				component="img"
				id="productCardImg"
				image={
					newItem.hasColors
						? newItem.colors.length > 0 &&
						  newItem.colors[0].imageURL
						: noColorState.imageURL
				}
				alt={color.colorName}
			/>
			<CardContent>
				<Stack direction="row" sx={{ alignItems: "center" }}>
					{newItem.colors.map((itemColor, idx) => {
						return (
							<ColorButton
								key={idx}
								currentColor={color}
								color={itemColor}
								setColor={setColor}
							/>
						);
					})}
				</Stack>
			</CardContent>
		</Card>
	);
};

export default AddItemCardColor;
