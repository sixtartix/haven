import { TournamentTitle } from './TournamentTitle';

interface BoostOptionsProps {
  options: {
    playWithBooster: boolean;
    priorityOrder: boolean;
    extraWin: boolean;
    tournamentTitle: boolean;
  };
  onChange: (options: any) => void;
  desiredRank: string;
  gameMode: string;
}

export function BoostOptions({ options, onChange, desiredRank, gameMode }: BoostOptionsProps) {
  const handleChange = (key: string) => {
    onChange({ ...options, [key]: !options[key as keyof typeof options] });
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <label className="flex items-center gap-2 bg-[#1E2130] p-3 rounded-lg cursor-pointer">
        <input
          type="checkbox"
          checked={options.playWithBooster}
          onChange={() => handleChange('playWithBooster')}
          className="rounded border-[#31D7F4]"
        />
        <span>Joue avec le Booster <span className="bg-pink-600 text-xs px-1 rounded">HOT</span></span>
      </label>

      <label className="flex items-center gap-2 bg-[#1E2130] p-3 rounded-lg cursor-pointer">
        <input
          type="checkbox"
          checked={options.priorityOrder}
          onChange={() => handleChange('priorityOrder')}
          className="rounded border-[#31D7F4]"
        />
        <span>Commande Prioritaire</span>
      </label>

      <label className="flex items-center gap-2 bg-[#1E2130] p-3 rounded-lg cursor-pointer">
        <input
          type="checkbox"
          checked={options.extraWin}
          onChange={() => handleChange('extraWin')}
          className="rounded border-[#31D7F4]"
        />
        <span>+1 Win</span>
      </label>

      <TournamentTitle
        checked={options.tournamentTitle}
        onChange={(checked) => onChange({ ...options, tournamentTitle: checked })}
        desiredRank={desiredRank}
        gameMode={gameMode}
      />
    </div>
  );
}