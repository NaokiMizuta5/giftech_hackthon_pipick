export const shuffle = <T>(array: readonly T[]): T[] => {
  const shuffled = [...array];
  const _len = shuffled.length;
  return shuffled.reduce((acc, _, i) => {
    const j = Math.floor(Math.random() * (i + 1));
    [acc[i], acc[j]] = [acc[j], acc[i]];
    return acc;
  }, shuffled);
};
