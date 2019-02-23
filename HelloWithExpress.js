//Import the top-level function of express
const express = require("express");

//Create an Express application using the top-level function

const app = express();

//Define port number as 3000

const port = 3000;
//Routes HTTP GET requests to the specified path '/' with the specified callback function
app.get("/", (req, res) => {
  res.send("Hello world");
});

//Make the app listen on port 3000
app.listen(port, () => {
  console.log(`Server listening on http://localhost: ${port}`);
});
