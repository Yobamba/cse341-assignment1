const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const port = process.env.PORT || 8080;

router.use(bodyParser.json());

const contactsController = require("../controllers/contacts");

router.get("/", contactsController.getAll, () => {
  /**
   * #swagger.tags = ["Contacts"]
   * #swagger.summary = "Get all of the contacts in the satabase"
   * #swagger.description = "Endpoint to get all of the contacts in the database"
   */
});

router.get("/:id", contactsController.getSingle, () => {
  /**
   * #swagger.summary = "Get a single contact from the database"
   * #swagger.description = "Endpoint to get a single contact from the database"
   */
});

router.post("/", contactsController.createContact, () => {
  /**
   * #swagger.summary = "Create a new contact"
   * #swagger.description = "Endpoint to create a new contact"
   * #swagger.parameter['obj'] => {
   * in: 'body',
   * type: 'object',
   * description: 'Contact data'}
   */
});

router.put("/:id", contactsController.modifyContact, () => {
  /**
   * #swagger.summary = "Modify a contact"
   * #swagger.description = "Endpoint to get a single contact from the database and modify it"
   */
});

router.delete("/:id", contactsController.deleteContact, () => {
  /**
   * #swagger.summary = "Delete a contact from the database"
   * #swagger.description = "Endpoint to delete a contact from the database"
   */
});

module.exports = router;

// #
