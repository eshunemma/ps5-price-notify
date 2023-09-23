const cron = require("node-cron");
// Import the Express library
const express = require("express");
const { compile } = require("./scrape");

// Create an Express application
const app = express();

// Define a route
app.get("/", (req, res) => {
  compile();
  res.send("Hello, Express!");
});

// Start the server
const port = process.env.PORT || 3000; // Use the specified port or default to 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Schedule a job to run every day at a specific time (e.g., 8:00 am)
// cron.schedule("*/30 * * * * *", () => {
//   // compile();
//   console.log("Daily cron job is running!");
// });

