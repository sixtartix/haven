import { getRankTier } from '../../utils/rankUtils';
import { gameModes } from '../../types/gameModes';

interface TournamentTitleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  desiredRank: string;
  gameMode: string;
}

export function TournamentTitle({ checked, onChange, desiredRank, gameMode }: TournamentTitleProps) {
  const selectedGameMode = gameModes.find(mode => mode.id === gameMode);
  const rankTier = getRankTier(Number(desiredRank));
  
  // Ne pas afficher l'option si le mode de jeu ne permet pas d'atteindre Grand Champion
  if (selectedGameMode && selectedGameMode.maxRank < 19) {
    return null;
  }

  return (
    <label className="flex items-center gap-2 bg-[#1E2130] p-3 rounded-lg cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="rounded border-[#31D7F4]"
      />
      <span>Titre de tournois <span className="bg-pink-600 text-xs px-1 rounded">HOT</span></span>
    </label>
  );
}