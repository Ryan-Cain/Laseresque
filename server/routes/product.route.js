const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
	app.get("/api/products", ProductController.readAll); //route works
	app.get("/api/products/:category", ProductController.readCategory); //route works
	app.get("/api/category/:productName", ProductController.readOne); //route works
	app.post("/api/products", ProductController.create); //route works
	app.patch("/api/:id/edit", ProductController.update); //route works
	app.delete("/api/products/:id", ProductController.delete); //route works
};
