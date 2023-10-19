// import the categories model
const Categories = require("../models/Category.model");

// READ ALL
module.exports.readAll = (req, res) => {
	Categories.find()
		.then((allCategoriess) => res.json(allCategoriess))
		.catch((err) => res.status(400).json(err));
};

// READ ONE
module.exports.readOne = (req, res) => {
	Categories.findOne({ _id: req.params.id })
		.then((oneCategories) => {
			res.json(oneCategories);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
};

// CREATE
module.exports.create = (req, res) => {
	Categories.create(req.body)
		.then((newCategories) => {
			res.json(newCategories);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
};

// UPDATE
module.exports.update = (req, res) => {
	Categories.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
		runValidators: true,
	})
		.then((updatedCategories) => {
			res.json(updatedCategories);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
};

// DELETE
module.exports.delete = (req, res) => {
	Categories.deleteOne({ _id: req.params.id })
		.then((result) => {
			res.json({ result: result });
		})
		.catch((err) => {
			res.status(400).json(err);
		});
};
