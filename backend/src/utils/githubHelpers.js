const hasReadme = (repo) => {
  const homepage = repo.homepage || "";

  return (
    homepage.trim().length > 0 ||
    repo.description !== null
  );
};

const hasDeployment = (repo) => {
  const homepage = repo.homepage || "";

  return homepage.trim().length > 0;
};

const isOriginalRepository = (repo) => {
  return !repo.fork;
};

const getRepositoryAgeInDays = (repo) => {
  const created = new Date(repo.created_at);
  const today = new Date();

  return Math.floor(
    (today - created) / (1000 * 60 * 60 * 24)
  );
};

export {
  hasReadme,
  hasDeployment,
  isOriginalRepository,
  getRepositoryAgeInDays,
};