import { Button } from "@/components/ui/button";

interface BoostTypeSelectProps {
  type: 'rank' | 'wins';
  onChange: (type: 'rank' | 'wins') => void;
}

export function BoostTypeSelect({ type, onChange }: BoostTypeSelectProps) {
  return (
    <div className="flex w-full gap-2 p-2 bg-[#1E2130] rounded-2xl">
      <Button
        variant="ghost"
        className={`flex-1 h-14 text-lg rounded-xl transition-all duration-200 ${
          type === 'rank'
            ? 'bg-[#4F46E5] text-white hover:bg-[#4F46E5] hover:text-white shadow-lg shadow-indigo-500/20'
            : 'bg-transparent text-white/70 hover:text-white hover:bg-white/10'
        }`}
        onClick={() => onChange('rank')}
      >
        By Rank
      </Button>
      <Button
        variant="ghost"
        className={`flex-1 h-14 text-lg rounded-xl transition-all duration-200 ${
          type === 'wins'
            ? 'bg-[#4F46E5] text-white hover:bg-[#4F46E5] hover:text-white shadow-lg shadow-indigo-500/20'
            : 'bg-transparent text-white/70 hover:text-white hover:bg-white/10'
        }`}
        onClick={() => onChange('wins')}
      >
        By Wins
      </Button>
    </div>
  );
}