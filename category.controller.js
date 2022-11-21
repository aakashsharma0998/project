let Categories = require("./category");
let sequelizeInstance = require("./db.config");
let express = require("express");
let expressApp = express();
let bodyParser = require("body-parser");
expressApp.use(bodyParser);
let createTable = async () => {
  await sequelizeInstance.sync({ force: true });
  insertCategories();
  console.log("table created successfully");
};
let insertCategories = async () => {
  await Categories.bulkCreate([
    {
      name: "Fashion",
    },
    {
      name: "Mobile",
    },
    {
      name: "Electronics",
    },
    {
      name: "Appliances",
    },
  ]);
};

let getAllCategories = async (req, res, next) => {
  let categories = await Categories.findAll();
  res.writeHead(200, { "Content-Type": "application/json" });
  res.send(JSON.stringify(categories));
  res.end();
};
let addNewCategory = async (req, res, next) => {
  let categoryToAdd = req.body.name;
  await Categories.create({
    name: categoryToAdd,
  });
  res.status(301).send("data added");
  res.end();
};

let getCategoryById = (req, res, next) => {
  res.write("this is for : + req.params.categoryId");
  res.end();
};
createTable();

module.exports = { getAllCategories, getCategoryById };
