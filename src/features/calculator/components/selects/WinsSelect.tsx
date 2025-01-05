import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface WinsSelectProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
}

export function WinsSelect({ value, onChange, label }: WinsSelectProps) {
  const wins = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="flex-1">
      <label className="text-sm text-white/70 mb-2 block">{label}</label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full bg-[#0A0B14] border-[#1E2130] text-white">
          <SelectValue>{value} wins</SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-[#0A0B14] border-[#1E2130] text-white max-h-[300px]">
          {wins.map((win) => (
            <SelectItem key={win} value={win.toString()} className="text-white">
              {win} wins
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}