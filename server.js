// Import express and cors
const express = require("express");
const cors = require("cors");

// Initialize the express app
const app = express();

const port = 3000;

app.use(cors());

app.use(express.json());

// Define a simple route
app.get("/", (req, res) => {
  res.send(
    "Hello, World! This is a simple Express server with CORS and JSON body support."
  );
});

// Example route to handle POST request with JSON body
app.post("/data", (req, res) => {
  const receivedData = req.body;
  res.json({ message: "Data received successfully!", data: receivedData });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
