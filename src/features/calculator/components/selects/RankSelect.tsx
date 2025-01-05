import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ranks } from "../../types/ranks";

interface RankSelectProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  maxRank?: number;
}

export function RankSelect({ value, onChange, label, maxRank = 20 }: RankSelectProps) {
  const availableRanks = ranks.filter(rank => rank.id <= maxRank);

  return (
    <div className="flex-1">
      <label className="text-base text-white/70 mb-3 block">{label}</label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full h-14 bg-[#0A0B14] border-[#1E2130] text-white rounded-2xl text-lg">
          <SelectValue>
            <div className="flex items-center gap-3">
              <img 
                src={ranks.find(r => r.id.toString() === value)?.image} 
                alt={ranks.find(r => r.id.toString() === value)?.name}
                className="w-8 h-8"
              />
              <span>{ranks.find(r => r.id.toString() === value)?.name}</span>
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-[#0A0B14] border-[#1E2130] text-white rounded-xl">
          {availableRanks.map((rank) => (
            <SelectItem key={rank.id} value={rank.id.toString()} className="text-white">
              <div className="flex items-center gap-3">
                <img src={rank.image} alt={rank.name} className="w-8 h-8" />
                <span className="text-base">{rank.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}