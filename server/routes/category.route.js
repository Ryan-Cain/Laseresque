const CategoryController = require("../controllers/category.controller");

module.exports = (app) => {
	app.get("/api/categories", CategoryController.readAll); //route works
	app.get("/api/categories/:id", CategoryController.readOne); //route works
	app.post("/api/categories", CategoryController.create); //route works
	app.patch("/api/:id/edit", CategoryController.update); //route works
	app.delete("/api/categories/:id", CategoryController.delete); //route works
};
