let Products = require("./../model/product");
let dbConnection = require("./../config/db.config");

let getAllProducts = async (req, res, next) => {
  let products = await Products.findAll();
  res.status(200).JSON(products);
  res.send();
};

let getProductById = async (req, res, next) => {
  let id = req.params.productId;
  if (!id) {
    res.status(400).send("ID not passed");
  }
  let products = await Products.findAll({
    where: {
      id: id,
    },
  });
  res.writeHead(200, { "Content -Type": "application/json" });
  res.write(JSON.stringify(products));
  res.end();
};

let insertProducts = async () => {
  await Products.bulkCreate([
    {
      name: "Samsung Galaxy Note",
      categoryId: 1,
      price: 18000,
    },
    {
      name: "Iphone 13",
      categoryId: 2,
      price: 60000,
    },
    {
      name: "Sony bravia",
      categoryId: 3,
      price: 40000,
    },
    {
      name: "Boat Rugged",
      categoryId: 4,
      price: 4000,
    },
    {
      name: "JBL Storm",
      categoryId: 5,
      price: 9000,
    },
    {
      name: "Vu 5",
      categoryId: 6,
      price: 32000,
    },
  ]);
};
insertProducts();
module.exports = { getAllProducts, getProductById };

let createTable = async () => {
  await dbConnection.sync();
  console.log("product table is created");
};

createTable();

module.exports = { getAllProducts, getProductById };
