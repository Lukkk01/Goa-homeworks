function fruit(reels, spins) {
  const results = spins.map((spinIndex, reelIndex) =>
    reels[reelIndex][spinIndex]
  );

  const [a, b, c] = results;

  if (a === b && b === c) {
    return a + a + a;
  }

  if (a === b || a === c) {
    return a + a;
  }
  if (b === c) {
    return b + b;
  }

  return '';
}
