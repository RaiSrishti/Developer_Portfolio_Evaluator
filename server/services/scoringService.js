exports.calculateScore = (repos, profile) => {
  // Activity (0–25)
  let activity = Math.min(repos.length * 2, 25);

  // Diversity (0–20)
  let languages = new Set(repos.map(r => r.language).filter(Boolean));
  let diversity = Math.min(languages.size * 2, 20);

  // Community (0–20) → NORMALIZED
  let community = Math.min(Math.log10(profile.followers + 1) * 5, 20);

  // Code Quality (0–20)
  let codeQuality = Math.min(
    repos.filter(r => r.description).length * 2,
    20
  );

  // Hiring Readiness (0–15)
  let hiring = 0;
  if (profile.bio) hiring += 5;
  if (profile.blog) hiring += 5;
  if (profile.email) hiring += 5;

  // Overall (0–100)
  let overall =
    activity +
    diversity +
    community +
    codeQuality +
    hiring;

  return {
    activity,
    diversity,
    community: Math.round(community),
    codeQuality,
    hiringReady: hiring,
    overall: Math.round(overall)
  };
};