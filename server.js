const bodyParser = require("body-parser");
const mongodb = require("./db/connect");
const express = require("express");
const swaggerDocument = require("./swagger-output.json");
const swaggerUi = require("swagger-ui-express");
// const swagger = require("../swagger.js");

const port = process.env.PORT || 8080;
const app = express();

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/", require("./routes"));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});

app.listen(3000, () => {
  console.log("listening on port 3000 for api documentation");
});
