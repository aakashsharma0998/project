let express = require("express");
let router = express.Router();
let categoryRoutes = require("./categories.route");
let productRoutes = require("./categories.route");

router.get("/", (req, res, next) => {
  res.write("this is base route");
  res.end();
});
router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);

module.exports = router;
