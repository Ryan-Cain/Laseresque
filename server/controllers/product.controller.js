// import the products model
const Products = require("../models/Product.model");

// READ ALL
module.exports.readAll = (req, res) => {
	Products.find()
		.then((allProductss) => res.json(allProductss))
		.catch((err) => res.status(400).json(err));
};

// READ ONE
module.exports.readOne = (req, res) => {
	Products.findOne({ _id: req.params.id })
		.then((oneProducts) => {
			res.json(oneProducts);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
};

// CREATE
module.exports.create = (req, res) => {
	Products.create(req.body)
		.then((newProducts) => {
			res.json(newProducts);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
};

// UPDATE
module.exports.update = (req, res) => {
	Products.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
		runValidators: true,
	})
		.then((updatedProducts) => {
			res.json(updatedProducts);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
};

// DELETE
module.exports.delete = (req, res) => {
	Products.deleteOne({ _id: req.params.id })
		.then((result) => {
			res.json({ result: result });
		})
		.catch((err) => {
			res.status(400).json(err);
		});
};
