import { useEffect } from "react";
import { Container, Box } from "@mui/material";
import CartTable from "./CartTable";

const ShopCart = ({ setSideCartOpen, userCart }) => {
	useEffect(() => {
		setSideCartOpen(false);
	}, []);
	return (
		<Container maxWidth="xl">
			<CartTable userCart={userCart} />
		</Container>
	);
};

export default ShopCart;
