if (process.env.NODE_env != "production") {
  require("dotenv").config();
}

module.exports = {
  PORT: process.env.PORT,
};
