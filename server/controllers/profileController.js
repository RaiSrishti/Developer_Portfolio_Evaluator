// const Report = require("../models/Report");
// const { getGitHubData } = require("../services/githubService");
// const { calculateScores } = require("../services/scoringService");

// const getProfile = async (req, res) => {
//   const { username } = req.params;

//   const cached = await Report.findOne({ username });
//   if (cached) return res.json(cached);

//   try {
//     const { user, repos, events } = await getGitHubData(username);

//     const scores = calculateScores(user, repos, events);

//     const report = await Report.create({
//       username,
//       avatarUrl: user.avatar_url,
//       name: user.name,
//       bio: user.bio,
//       followers: user.followers,
//       publicRepos: user.public_repos,
//       scores,
//       topRepos: repos.slice(0, 6),
//       shareUrl: `/report/${username}`,
//       expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
//     });

//     res.json(report);
//   } catch {
//     res.status(404).json({ message: "User not found" });
//   }
// };

// module.exports = { getProfile };
import { fetchGitHubData } from "../services/githubService.js";
import { calculateScore } from "../services/scoringService.js";

export const getProfile = async (req, res) => {
  try {
    const { username } = req.params;

    const data = await fetchGitHubData(username);
    const score = calculateScore(data);

    res.json({ ...data, score });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};