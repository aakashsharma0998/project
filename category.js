let sequelize = require("sequelize");
let dbConnection = require("./../config/db.config");
let categoryModel = dbConnection.define("categories", {
  id: {
    primaryKey: true,
    notNull: true,
    type: sequelize.DataTypes.INTEGER,
    autoIncrement: true,
  },
  name: {
    notNull: true,
    type: sequelize.DataTypes.STRING,
  },
});
module.exports = categoryModel;
