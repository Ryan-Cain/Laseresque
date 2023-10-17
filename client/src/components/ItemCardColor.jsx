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

const ItemCardColor = ({ item, showColorName }) => {
	const [color, setColor] = useState(item.colors[0]);
	const navigate = useNavigate();
	return (
		<Card>
			<CardContent onClick={() => navigate("/shop/item/" + color.color)}>
				<Typography gutterBottom variant="h5" component="div">
					{item.name} {showColorName && `(${color.displayedColor})`}
				</Typography>
			</CardContent>
			<CardMedia
				onClick={() => navigate("/shop/item/" + color.color)}
				component="img"
				height="250"
				image={color.img}
				alt={color.color}
			/>
			<CardContent>
				<Stack direction="row" sx={{ alignItems: "center" }}>
					{item.colors.map((color, idx) => {
						console.log(color);
						return (
							<ColorButton
								key={idx}
								color={color}
								setColor={setColor}
							/>
						);
					})}
					<p>(In stock)</p>
				</Stack>
			</CardContent>
		</Card>
	);
};

export default ItemCardColor;
