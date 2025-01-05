import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { regions } from "../../constants/regions";
import { platforms } from "../../constants/platforms";

export function RegionPlatformSection() {
  return (
    <>
      <Select defaultValue="europe">
        <SelectTrigger className="bg-[#0A0B14] border-[#1E2130] text-white">
          <SelectValue placeholder="Select region">
            {regions.map((region) => (
              region.id === "europe" && (
                <span key={region.id} className="flex items-center gap-2">
                  <span>{region.emoji}</span>
                  <span>{region.name}</span>
                </span>
              )
            ))}
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-[#0A0B14] border-[#1E2130] text-white max-h-[300px]">
          {regions.map((region) => (
            <SelectItem 
              key={region.id} 
              value={region.id}
              className="text-white hover:bg-[#1E2130] cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <span>{region.emoji}</span>
                <span>{region.name}</span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select defaultValue="pc">
        <SelectTrigger className="bg-[#0A0B14] border-[#1E2130] text-white">
          <SelectValue placeholder="Select platform">
            {platforms.map((platform) => (
              platform.id === "pc" && (
                <span key={platform.id} className="flex items-center gap-2">
                  <span>{platform.emoji}</span>
                  <span>{platform.name}</span>
                </span>
              )
            ))}
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-[#0A0B14] border-[#1E2130] text-white">
          {platforms.map((platform) => (
            <SelectItem 
              key={platform.id} 
              value={platform.id}
              className="text-white hover:bg-[#1E2130] cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <span>{platform.emoji}</span>
                <span>{platform.name}</span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
}