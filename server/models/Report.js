const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  avatarUrl: String,
  name: String,
  bio: String,
  followers: Number,
  publicRepos: Number,
  scores: Object,
  topRepos: Array,
  languages: Array,
  heatmapData: Object,
  shareUrl: String,
  cachedAt: { type: Date, default: Date.now },
  expiresAt: { type: Date, index: { expires: "24h" } }
});

module.exports = mongoose.model("Report", ReportSchema);