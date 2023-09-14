const routes = require("express").Router();

const controller = require("../controllers");

routes.get("/", controller.myName);

module.exports = routes;
