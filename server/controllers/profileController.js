const Report = require("../models/Report");
const { getUserProfile, getReposData } = require("../services/githubService");
const { calculateScore } = require("../services/scoringService");

exports.getProfile = async (req, res) => {
  const { username } = req.params.username.toLowerCase();

  try {
    // ✅ Check cache
    const cached = await Report.findOne({ username });
    if (cached) return res.json(cached);

    // ✅ Fetch data
    const profile = await getUserProfile(username);

    // ✅ THIS IS THE FIX
    const { repos, topRepos, languages } = await getReposData(username);

    // ✅ Score
    const scores = calculateScore(repos, profile);

    // ✅ Save to DB
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
    console.error(error);
    res.status(500).json({ error: "Error fetching data" });
  }
};