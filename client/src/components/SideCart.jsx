import React from "react";
import { Stack } from "@mui/material";

const SideItem = ({ item }) => {
	return (
		<div>
			x{item.userQuantity} - {item.name} - $
			{item.price * item.userQuantity}
		</div>
	);
};

const SideCart = ({ userCart }) => {
	let totalCartPrice = 0;
	userCart.forEach((item) => {
		const newSubtotal = item.price * item.userQuantity;
		totalCartPrice += newSubtotal;
	});
	return (
		<Stack
			sx={{
				padding: "15px",
				backgroundColor: "white",
				borderTop: "2px solid black",
			}}
		>
			<h3>Cart</h3>
			{userCart.length > 0 &&
				userCart.map((item, idx) => {
					return <SideItem key={idx} item={item} />;
				})}
			<h4 style={{ alignSelf: "flex-end" }}>
				Subtotal - ${totalCartPrice}
			</h4>
			<p
				style={{
					alignSelf: "flex-end",
					color: "blue",
				}}
			>
				(does not include tax or shipping)
			</p>
			{/* {JSON.stringify(userCart)} */}
		</Stack>
	);
};

export default SideCart;
