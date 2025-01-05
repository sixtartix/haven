import { BASE_PRICES, OPTION_MULTIPLIERS, WIN_PRICES, TOURNAMENT_TITLE_PRICES } from './constants';
import { getRankTier, calculateRankDifference, getRankDivision } from './rankUtils';

interface PriceCalculatorOptions {
  playWithBooster: boolean;
  appearOffline: boolean;
  priorityOrder: boolean;
  liveStream: boolean;
  extraWin: boolean;
  tournamentTitle: boolean;
}

export function calculateBoostPrice(
  currentRankId: number,
  desiredRankId: number,
  options: PriceCalculatorOptions,
  gameModePriceMultiplier: number = 1,
  gameMode: string = '2v2'
) {
  let totalPrice = 0;
  const currentRank = Number(currentRankId);
  const desiredRank = Number(desiredRankId);
  
  if (desiredRank <= currentRank) {
    return { originalPrice: 0, totalPrice: 0 };
  }

  for (let rank = currentRank; rank < desiredRank; rank++) {
    const tier = getRankTier(rank);
    const basePrice = BASE_PRICES[tier];
    const division = getRankDivision(rank);
    
    let divisionMultiplier = 1 + (division - 1) * 0.1;
    
    const rankDiff = calculateRankDifference(currentRank, desiredRank);
    if (rankDiff <= 3) {
      divisionMultiplier *= 0.8;
    }
    
    totalPrice += basePrice * divisionMultiplier;
  }

  // Ajouter le prix du titre de tournoi si l'option est sélectionnée
  if (options.tournamentTitle) {
    const desiredRankTier = getRankTier(desiredRank);
    totalPrice += TOURNAMENT_TITLE_PRICES[desiredRankTier];
  }

  // Appliquer le multiplicateur du mode de jeu
  totalPrice *= gameModePriceMultiplier;

  // Ajouter 10% supplémentaires pour le 1v1 au-delà de Diamond I
  if (gameMode === '1v1' && desiredRank > 13) {
    totalPrice *= 1.10;
  }

  let optionsMultiplier = 1;
  Object.entries(options).forEach(([option, isEnabled]) => {
    if (isEnabled && option in OPTION_MULTIPLIERS) {
      optionsMultiplier *= OPTION_MULTIPLIERS[option];
    }
  });

  const originalPrice = totalPrice * optionsMultiplier;
  const finalPrice = originalPrice * 0.77;

  return {
    originalPrice: Math.round(originalPrice * 100) / 100,
    totalPrice: Math.round(finalPrice * 100) / 100
  };
}

export function calculateWinsPrice(
  currentRankId: number,
  winsCount: number,
  options: PriceCalculatorOptions,
  gameModePriceMultiplier: number = 1,
  gameMode: string = '2v2'
) {
  const tier = getRankTier(currentRankId);
  const baseWinPrice = WIN_PRICES[tier];
  
  let totalPrice = baseWinPrice * winsCount;

  // Ajouter le prix du titre de tournoi si l'option est sélectionnée
  if (options.tournamentTitle) {
    const currentRankTier = getRankTier(currentRankId);
    totalPrice += TOURNAMENT_TITLE_PRICES[currentRankTier];
  }
  
  totalPrice *= gameModePriceMultiplier;

  // Ajouter 10% supplémentaires pour le 1v1 au-delà de Diamond I
  if (gameMode === '1v1' && currentRankId > 13) {
    totalPrice *= 1.10;
  }

  let optionsMultiplier = 1;
  Object.entries(options).forEach(([option, isEnabled]) => {
    if (isEnabled && option in OPTION_MULTIPLIERS) {
      optionsMultiplier *= OPTION_MULTIPLIERS[option];
    }
  });

  const originalPrice = totalPrice * optionsMultiplier;
  const finalPrice = originalPrice * 0.77;

  return {
    originalPrice: Math.round(originalPrice * 100) / 100,
    totalPrice: Math.round(finalPrice * 100) / 100
  };
}