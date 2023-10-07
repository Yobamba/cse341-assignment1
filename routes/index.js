const routes = require("express").Router();
const controller = require("../controllers");
const swaggerDocument = require("../swagger-output.json");
const swaggerUi = require("swagger-ui-express");
// const swagger = require("../swagger.js");

routes.use("/contacts", require("./contacts"));

routes.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// routes.listen(3000, () => {
//   console.log("listening for documentation on port 3000");
// });

module.exports = routes;
