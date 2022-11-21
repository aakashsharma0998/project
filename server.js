let serverConfig = require("./config/server.config");
let express = require("express");
const router = require("./routes/index");
let categoryRouter = require();
let productRouter = require();
let expressApp = express();
expressApp.use(bodyParser.json());
expressApp.use(router);
expressApp.listen(serverConfig.PORT, () => {
  console.log("server is running on port 8080" + serverConfig.PORT);
});
