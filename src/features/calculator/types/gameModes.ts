export type GameMode = {
  id: string;
  name: string;
  maxRank: number;
  priceMultiplier?: number;
};

export const gameModes: GameMode[] = [
  { id: '1v1', name: '1v1 (Solo Duels)', maxRank: 17, priceMultiplier: 1.05 },
  { id: '2v2', name: '2v2 (Doubles)', maxRank: 20 },
  { id: '3v3', name: '3v3 (Standard)', maxRank: 19, priceMultiplier: 1.25 },
  { id: 'rumble', name: 'Rumble', maxRank: 16, priceMultiplier: 1.25 },
  { id: 'snowday', name: 'Snow Day', maxRank: 17, priceMultiplier: 1.25 },
];