var express = require("express");
var app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("listening on port 8080");
});

app.use("/", require("./routes"));

app.use("/contacts", require("./routes/contacts"));
