import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddCategoryImageCard = ({ newCategory }) => {
	const noImageState = {
		category: "No Category",
		imageURL:
			"https://www.stma.org/wp-content/uploads/2017/10/no-image-icon.png",
	};

	const navigate = useNavigate();
	return (
		<Card>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{newCategory.category
						? newCategory.category
						: "(No Category Name)"}{" "}
				</Typography>
			</CardContent>
			<CardMedia
				style={{ marginBottom: "15px" }}
				component="img"
				id="productCardImg"
				image={
					newCategory.imageURL
						? newCategory.imageURL
						: noImageState.imageURL
				}
				alt={newCategory.category}
			/>
		</Card>
	);
};

export default AddCategoryImageCard;
