import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { gameModes } from "../../types/gameModes";

interface GameModeSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export function GameModeSelect({ value, onChange }: GameModeSelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full bg-[#0A0B14] border-[#1E2130] text-white">
        <SelectValue>{gameModes.find(mode => mode.id === value)?.name}</SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-[#0A0B14] border-[#1E2130] text-white">
        {gameModes.map((mode) => (
          <SelectItem 
            key={mode.id} 
            value={mode.id} 
            className="text-white flex items-center justify-between"
          >
            <span>{mode.name}</span>
            {mode.priceMultiplier && (
              <span className="text-sm text-blue-400">
                (+{((mode.priceMultiplier - 1) * 100).toFixed(0)}%)
              </span>
            )}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}