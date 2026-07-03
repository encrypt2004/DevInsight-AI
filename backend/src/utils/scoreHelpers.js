const normalizeScore = (score, maxScore) => {
  if (maxScore === 0) return 0;

  return Number(((score / maxScore) * 100).toFixed(1));
};

const clampScore = (score, min = 0, max = 100) => {
  return Math.max(min, Math.min(score, max));
};

const average = (numbers) => {
  if (!numbers.length) return 0;

  const total = numbers.reduce((sum, num) => sum + num, 0);

  return total / numbers.length;
};

const percentage = (value, total) => {
  if (total === 0) return 0;

  return Number(((value / total) * 100).toFixed(1));
};

export {
  normalizeScore,
  clampScore,
  average,
  percentage,
};