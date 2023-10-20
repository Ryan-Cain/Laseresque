// import mongoose to build schema
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Must enter a name for your product"],
			minLength: [3, "The name must be at least 3 char long"],
		},
		nameEndpoint: {
			type: String,
			required: [true, "Must enter a name endpoint for your product"],
			minLength: [3, "The name endpoint must be at least 3 char long"],
		},
		price: {
			type: Number,
			required: [true, "Must enter a price for your product"],
			min: [1, "The price must be greater than 1"],
		},
		quantity: {
			type: Number,
			required: [true, "Must enter a quantity for your product"],
			min: [0, "The quantity must not be negative"],
		},
		hasColors: {
			type: Boolean,
			required: [true, "Required"],
		},
		hasCustomText: {
			type: Boolean,
			required: [true, "Required"],
		},
		category: {
			type: String,
			required: [true, "Must have a category for your product"],
		},
		colors: {
			type: Array,
		},
		images: {
			type: Array,
		},
		customText: {
			type: Array,
		},
	},
	{ timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
