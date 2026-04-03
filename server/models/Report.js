
// const ReportSchema = new mongoose.Schema({ 
//   username:    { type: String, required: true, unique: true, index: true }, 
//   avatarUrl:   String, 
//   name:        String, 
//   bio:         String, 
//   followers:   Number, 
//   publicRepos: Number, 
//   scores: { 
//     activity:      Number,   // 0-100 
//     codeQuality:   Number, 
//     diversity:     Number, 
//     community:     Number,    
//     hiringReady:   Number, 
//     overall:       Number,   // weighted total 
//   }, 
//   topRepos: [ 
//     { 
//       name:        String, 
//       stars:       Number, 
//       forks:       Number, 
//       language:    String, 
//       description: String, 
//       url:         String, 
//     } 
//   ], 
//   languages:     [{ name: String, percent: Number }], 
//   heatmapData:   mongoose.Schema.Types.Mixed,  // contributions per week 
//   shareUrl:      String, 
//   cachedAt:      { type: Date, default: Date.now }, 
//   expiresAt:     { type: Date, index: { expires: 0 } }  // TTL index — auto deletes 
// }, { timestamps: true }); 
const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
  username: String,
  avatarUrl: String,
  name: String,
  bio: String,
  followers: Number,
  publicRepos: Number,
  scores: Object,
  topRepos: Array,
  languages: Object,
  heatmapData: Object,
  shareUrl: String,
  cachedAt: { type: Date, default: Date.now },
  expiresAt: { type: Date, index: { expires: "24h" } }
});

module.exports = mongoose.model("Report", ReportSchema);