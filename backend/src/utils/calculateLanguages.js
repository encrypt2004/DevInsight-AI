const calculateLanguages = (repositories) => {
  const languageMap = {};

  repositories.forEach((repo) => {
    if (!repo.language) return;

    languageMap[repo.language] =
      (languageMap[repo.language] || 0) + 1;
  });

  return Object.entries(languageMap)
    .map(([language, count]) => ({
      language,
      count,
    }))
    .sort((a, b) => b.count - a.count);
};

export default calculateLanguages;