const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

// const app = express();
const port = process.env.PORT || 8080;

router.use(bodyParser.json());

const contactsController = require("../controllers/contacts");

router.get("/", contactsController.getAll);

router.get("/:id", contactsController.getSingle);

// router.post("/create-contact", (req, res) => {
//   console.log("In the post route.");
//   const newContact = req.body;
//   contactsController.createContact(newContact);
//   console.log(newContact);
//   res.send("A new contact was created");
// });

router.post("/", contactsController.createContact);

// router.post("/", (req, res) => {
//   const contact = req.body;
//   console.log(contact);
// });

// Create a PUT route to update a contact. This route should allow for
// a url similar to this: api-url-path/contacts/id-to-modify. (The id won't
//be modified, it will just be the means of finding a specific document in the database.)
//Return an http status code representing the successful completion of the request.

// router.put(
//   "http://localhost:8080/contacts/6511fdda47f0692d782f826d",
//   "/:id",
//   (req, res) => {
//     contactsController.modifyContact();

//     res.send("The contact has been modified");
//   }
// );

// app.listen(port, () => {
//   console.log("listening on port 8080");
// });

module.exports = router;

// #
