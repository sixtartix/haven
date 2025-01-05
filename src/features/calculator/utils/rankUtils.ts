import { ranks } from '../types/ranks';

export function getRankTier(rankId: number) {
  if (rankId <= 3) return 'BRONZE';
  if (rankId <= 6) return 'SILVER';
  if (rankId <= 9) return 'GOLD';
  if (rankId <= 12) return 'PLATINUM';
  if (rankId <= 15) return 'DIAMOND';
  if (rankId <= 18) return 'CHAMPION';
  return 'GRAND_CHAMPION';
}

export function getRankDivision(rankId: number) {
  return ((rankId - 1) % 3) + 1;
}

export function calculateRankDifference(currentRank: number, desiredRank: number) {
  const rankDiff = desiredRank - currentRank;
  return Math.max(0, rankDiff);
}

export function getRankName(rankId: number) {
  return ranks.find(r => r.id === rankId)?.name || '';
}