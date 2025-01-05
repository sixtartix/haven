// Prix de base par division (en euros)
export const BASE_PRICES = {
  BRONZE: 3,    // Prix très bas pour les rangs débutants
  SILVER: 4,    // Légère augmentation
  GOLD: 5,      // Prix modéré
  PLATINUM: 7,  // Prix moyen
  DIAMOND: 12,  // Prix plus élevé
  CHAMPION: 20, // Prix premium
  GRAND_CHAMPION: 35 // Prix maximum
};

// Multiplicateurs pour les options
export const OPTION_MULTIPLIERS = {
  playWithBooster: 1.3,
  priorityOrder: 1.15,
  liveStream: 1.2,
  extraWin: 1.1
};

// Prix par victoire selon le rang (prix réduits)
export const WIN_PRICES = {
  BRONZE: 1,      // Était 2
  SILVER: 1.5,    // Était 3
  GOLD: 2,        // Était 4
  PLATINUM: 2.5,  // Était 5
  DIAMOND: 3,     // Était 8
  CHAMPION: 4,    // Était 12
  GRAND_CHAMPION: 5 // Était 20
};

// Prix des titres de tournois par rang
export const TOURNAMENT_TITLE_PRICES = {
  BRONZE: 1,
  SILVER: 2,
  GOLD: 3,
  PLATINUM: 5,
  DIAMOND: 8,
  CHAMPION: 15,
  GRAND_CHAMPION: 30
};