// Import express and cors
const express = require("express");
const sequelize = require("./database/db");
const cors = require("cors");

// Initialize the express app
const app = express();

const port = 5000;

app.use(cors());

app.use(express.json());

// Sync Database

sequelize
  .sync({ force: false }) // { force: true } drops and recreates the table, useful for development
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

// Define a simple route
app.get("/", (req, res) => {
  res.send(
    "Hello, World! This is a simple Express server with CORS and JSON body support."
  );
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
