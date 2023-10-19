// import mongoose to build schema
const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
	{
		category: {
			type: String,
			required: [true, "Must enter a name for your category"],
			minLength: [3, "The name must be at least 3 char long"],
		},
		imageURL: {
			type: String,
			required: [true, "Must enter an image url"],
			minLength: [3, "The url must be at least 10 characters long"],
		},
		quantity: {
			type: Number,
			default: 0,
		},
	},
	{ timestamps: true }
);

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
