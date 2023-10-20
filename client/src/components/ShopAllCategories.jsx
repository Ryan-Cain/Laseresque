import { useEffect } from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const ShopAllCategories = ({ setSideCartOpen, categories }) => {
	const navigate = useNavigate();
	useEffect(() => {
		setSideCartOpen(true);
	}, []);

	return (
		<Container>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Link to="/shop">
						<h2 style={{ margin: "10px 0", color: "blue" }}>
							Categories
						</h2>
					</Link>
				</Grid>
				{categories.map((category) => {
					return (
						<Grid item key={category._id} xs={4}>
							<Card
								onClick={() =>
									navigate(
										"/shop/" + category.categoryEndpoint
									)
								}
							>
								<CardActionArea>
									<CardMedia
										component="img"
										height="250"
										image={category.imageURL}
										alt={category.category}
									/>
									<CardContent>
										<Typography
											gutterBottom
											variant="h5"
											component="div"
										>
											{category.category}
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
					);
				})}
			</Grid>
		</Container>
	);
};

export default ShopAllCategories;
