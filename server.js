var express = require("express");
var app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("listening on port 3000");
});

app.use("/", require("./routes"));
// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Ednilson");
// });

// const port = 3000;
// server.listen(port),
//   () => {
//     console.log(`Server listening on ${port}`);
//   };
