const express = require("express");
const router = express.Router();
const { getProfile } = require("../controllers/profileController");

// Root route for /api/profile
router.get("/", (req, res) => {
  res.json({ message: "Profile API is working. Use /api/profile/:username" });
});

// Get profile by username
router.get("/:username", getProfile);

module.exports = router;