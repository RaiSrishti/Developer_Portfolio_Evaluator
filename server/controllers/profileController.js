const Report = require("../models/Report");
const { getUserProfile, getReposData } = require("../services/githubService");
const { calculateScore } = require("../services/scoringService");

exports.getProfile = async (req, res) => {
  const username = req.params.username.toLowerCase(); // ✅ fixed here

  try {
    // ✅ Check cache in DB
    const cached = await Report.findOne({ username });
    if (cached) return res.json(cached);

    // ✅ Fetch GitHub user profile
    const profile = await getUserProfile(username);

    // ✅ Fetch repos data
    const { repos, topRepos, languages } = await getReposData(username);

    // ✅ Calculate score
    const scores = calculateScore(repos, profile);

    // ✅ Save to MongoDB
    const report = await Report.create({
      username,
      avatarUrl: profile.avatar_url,
      name: profile.name,
      bio: profile.bio,
      followers: profile.followers,
      publicRepos: profile.public_repos,
      scores,
      topRepos,
      languages,
      shareUrl: `/report/${username}`,
    });

    res.json(report);

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error fetching data" });
  }
};