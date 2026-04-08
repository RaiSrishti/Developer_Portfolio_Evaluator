require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors({ origin: "*" }));
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Hello! Backend is running.");
});

// Your API routes
app.use("/api/profile", require("./routes/profileRoutes"));

app.listen(process.env.PORT || 5000, () => console.log("Server running"));