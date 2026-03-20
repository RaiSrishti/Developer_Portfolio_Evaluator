// const calculateScores = (user, repos, events) => {
//     const activity = Math.min(events.length * 2, 25);
  
//     const codeQuality = Math.min(
//       repos.filter(r => r.description).length * 2,
//       20
//     );
  
//     const diversity = Math.min(
//       new Set(repos.map(r => r.language)).size,
//       20
//     );
  
//     const stars = repos.reduce((a, r) => a + r.stargazers_count, 0);
//     const community = Math.min(Math.log(stars + 1) * 5, 20);
  
//     let hiringReady = 0;
//     if (user.bio) hiringReady += 5;
//     if (user.blog) hiringReady += 5;
//     if (user.email) hiringReady += 5;
  
//     const overall =
//       activity * 0.25 +
//       codeQuality * 0.2 +
//       diversity * 0.2 +
//       community * 0.2 +
//       hiringReady * 0.15;
  
//     return { activity, codeQuality, diversity, community, hiringReady, overall };
//   };
  
//   module.exports = { calculateScores };

export const calculateScore = (data) => {
  let score = 0;

  score += data.repos.length * 2;

  data.repos.forEach((repo) => {
    score += repo.stargazers_count;
  });

  return score;
};