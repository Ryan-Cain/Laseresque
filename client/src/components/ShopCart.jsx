import { useEffect } from "react";
import { Container, Box } from "@mui/material";
import CartTable from "./CartTable";

const ShopCart = ({ setSideCartOpen }) => {
	useEffect(() => {
		setSideCartOpen(false);
	}, []);
	return (
		<Container maxWidth="xl">
			{/* <Box sx={{ bgcolor: "white", height: "100%", marginTop: "25px" }} /> */}
			<CartTable />
		</Container>
	);
};

export default ShopCart;
