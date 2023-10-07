const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Contacts API",
    description: "API that handles a database of contacts",
  },
  host: "https://cse341-assignment1-q09s.onrender.com",
  schemes: ["http"],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("./server.js");
});
