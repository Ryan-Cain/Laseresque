import { useEffect } from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const categoryStatic = [
	{
		catName: "Coasters",
		img: "https://i.etsystatic.com/5876407/r/il/1369ba/2107571671/il_fullxfull.2107571671_aq1m.jpg",
	},
	{
		catName: "Glassware",
		img: "https://www.edco.com/images/thumbs/0034259_custom-engraved-supplied-glassware_600.jpeg",
	},
	{
		catName: "Misc",
		img: "https://www.laseresque.com/images/products/thumbs/cb-08-cori.png",
	},
	{
		catName: "Mugs",
		img: "https://emmalinebride.com/marketplace/wp-content/uploads/Bass-Beer-Mug-Personalized.jpg",
	},
	{
		catName: "Plaques",
		img: "https://i.etsystatic.com/11978219/r/il/1bd1f1/1744070773/il_794xN.1744070773_bhj4.jpg",
	},
	{
		catName: "Tumblers",
		img: "https://www.mdengravinggifts.com/uploads/9/4/5/9/94594675/30-oz-full-set_2.jpg",
	},
];

const ShopAllCategories = ({ setSideCartOpen }) => {
	const navigate = useNavigate();
	useEffect(() => {
		setSideCartOpen(true);
	}, []);

	return (
		<div>
			<div>
				<Link to="/shop">
					<h2 style={{ margin: "10px 0" }}>Categories</h2>
				</Link>
			</div>
			{/* <h2 style={{ margin: "10px 0" }}>Categories</h2> */}
			<Grid container spacing={3}>
				{categoryStatic.map((item, idx) => {
					return (
						<Grid item key={idx} xs={3}>
							<Card
								onClick={() =>
									navigate("/shop/" + item.catName)
								}
							>
								<CardActionArea>
									<CardMedia
										component="img"
										height="250"
										image={item.img}
										alt={item.catName}
									/>
									<CardContent>
										<Typography
											gutterBottom
											variant="h5"
											component="div"
										>
											{item.catName}
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
					);
				})}
			</Grid>
		</div>
	);
};

export default ShopAllCategories;
