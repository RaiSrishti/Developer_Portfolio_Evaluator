const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

// 🔹 Get user profile
exports.getUserProfile = async (username) => {
  const { data } = await octokit.users.getByUsername({ username });
  return data;
};

// 🔹 Get repos + process everything
exports.getReposData = async (username) => {
  const { data: repos } = await octokit.repos.listForUser({
    username,
    per_page: 100,
  });

  // ✅ Top Repositories (by stars)
  const topRepos = repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6)
    .map((repo) => ({
      name: repo.name,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language,
      description: repo.description,
      url: repo.html_url,
    }));

  // ✅ Language Distribution
  const languageCount = {};
  repos.forEach((repo) => {
    if (repo.language) {
      languageCount[repo.language] =
        (languageCount[repo.language] || 0) + 1;
    }
  });

  // 🔹 Return everything
  return {
    repos,
    topRepos,
    languages: languageCount,
  };
};

console.log("TOKEN:", process.env.GITHUB_TOKEN);