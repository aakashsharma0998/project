let express = require("express");
let categoryRouter = express.Router();
let categoryController = require("./category.controller");
categoryRouter.get("/categories", categoryController.getAllCategories);
categoryRouter.get(
  "/categories/:categoryId",
  categoryController.getCategoryById
);
categoryRouter.post("/categoryController.addNewCategory");
module.exports = categoryRouter;
