import { calculateBoostPrice, calculateWinsPrice } from '../utils/priceCalculator';

export function useBoostPrice(
  currentRank: string,
  desiredRank: string,
  options: any,
  boostType: 'rank' | 'wins',
  winsCount: string,
  priceMultiplier: number = 1,
  gameMode: string = '2v2'
) {
  if (boostType === 'rank') {
    return calculateBoostPrice(
      Number(currentRank),
      Number(desiredRank),
      options,
      priceMultiplier,
      gameMode
    );
  } else {
    return calculateWinsPrice(
      Number(currentRank),
      Number(winsCount),
      options,
      priceMultiplier,
      gameMode
    );
  }
}