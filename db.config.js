let Sequelize = require("sequelize");
let sequelizeInstance = new Sequelize("ecomm", "root", "Aakash@123", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: 0,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
module.exports = sequelizeInstance;
