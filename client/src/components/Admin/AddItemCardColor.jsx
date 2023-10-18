import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ColorButton = ({ color, setColor }) => {
	return (
		<div
			onClick={() => setColor(color)}
			style={{
				backgroundColor: color.color,
				borderRadius: "50%",
				height: "25px",
				width: "25px",
				marginRight: "10px",
			}}
		></div>
	);
};

const AddItemCardColor = ({ newItem, showColorName }) => {
	const colorState = newItem.colors[0]
		? newItem.colors[0]
		: {
				colorName: "no color",
				img: "https://www.stma.org/wp-content/uploads/2017/10/no-image-icon.png",
		  };
	const [color, setColor] = useState(colorState);
	const navigate = useNavigate();
	return (
		<Card>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{newItem.name}{" "}
					{showColorName && `(${color.displayedColor})`}
				</Typography>
			</CardContent>
			<CardMedia
				component="img"
				id="productCardImg"
				image={color.img}
				alt={color.colorName}
			/>
			<CardContent>
				<Stack direction="row" sx={{ alignItems: "center" }}>
					{newItem.colors.map((color, idx) => {
						return (
							<ColorButton
								key={idx}
								color={color}
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
