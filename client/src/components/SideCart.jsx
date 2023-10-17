import React from "react";
import { Stack } from "@mui/material";

const staticItems = [
	{ name: "20oz Tumbler", quantity: 2, price: 20 },
	{ name: "Stemless glass", quantity: 1, price: 18 },
];
const totalCartPrice = 38;

const SideItem = ({ item }) => {
	return (
		// <div>
		// 	<span>x{item.quantity}</span>
		// 	{" - "}
		// 	<span>{item.name}</span>
		// 	{" - "}
		// 	<span>${item.price * item.quantity}</span>
		// </div>
		<div>
			x{item.quantity} - {item.name} - ${item.price * item.quantity}
		</div>
	);
};

const SideCart = () => {
	return (
		<Stack
			sx={{
				padding: "15px",
				backgroundColor: "white",
				borderTop: "2px solid black",
			}}
		>
			<h3>Cart</h3>
			{staticItems.map((item, idx) => {
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
		</Stack>
	);
};

export default SideCart;
