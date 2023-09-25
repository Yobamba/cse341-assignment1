const express = require("express");
const router = express.Router();
// const app = express();
const port = process.env.PORT || 8080;

const contactsController = require("../controllers/contacts");

router.get("/", contactsController.getAll);

router.get("/:id", contactsController.getSingle);

// app.listen(port, () => {
//   console.log("listening on port 8080");
// });

module.exports = router;

// #
