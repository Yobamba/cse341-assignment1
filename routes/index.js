const routes = require("express").Router();

const controller = require("../controllers");

routes.use("/contacts", require("./contacts"));

module.exports = routes;
