// Prix de base de la concurrence (eloking.com)
const COMPETITOR_BASE_PRICES = {
  BRONZE: 4.5,
  SILVER: 6,
  GOLD: 7.5,
  PLATINUM: 10.5,
  DIAMOND: 18,
  CHAMPION: 30,
  GRAND_CHAMPION: 52.5
};

const COMPETITOR_WIN_PRICES = {
  BRONZE: 1.5,
  SILVER: 2.25,
  GOLD: 3,
  PLATINUM: 3.75,
  DIAMOND: 4.5,
  CHAMPION: 6,
  GRAND_CHAMPION: 7.5
};

import { getRankTier } from './rankUtils';

export function getCompetitorPrice(
  currentRank: string,
  desiredRank: string,
  boostType: 'rank' | 'wins'
): number {
  if (boostType === 'rank') {
    let totalPrice = 0;
    const current = Number(currentRank);
    const desired = Number(desiredRank);

    for (let rank = current; rank < desired; rank++) {
      const tier = getRankTier(rank);
      totalPrice += COMPETITOR_BASE_PRICES[tier];
    }

    return totalPrice;
  } else {
    const tier = getRankTier(Number(currentRank));
    return COMPETITOR_WIN_PRICES[tier] * 10; // Prix pour 10 victoires
  }
}