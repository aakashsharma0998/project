let serverConfig = require("./server.Config");
let express = require("express");
const router = require("./index");
let bodyParser = require("body-parser");
let categoryRouter = require("./categories.route");
let productRouter = require("./products.route");
let expressApp = express();
expressApp.use(bodyParser.json());
expressApp.use(router);
expressApp.listen(serverConfig.PORT, () => {
  console.log("server is running on port 8080" + serverConfig.PORT);
});
