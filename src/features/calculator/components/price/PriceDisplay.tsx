import { AlertCircle } from 'lucide-react';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getCompetitorPrice } from '../../utils/competitorPrice';

interface PriceDisplayProps {
  originalPrice: number;
  totalPrice: number;
  currentRank: string;
  desiredRank: string;
  boostType: 'rank' | 'wins';
}

export function PriceDisplay({ 
  originalPrice, 
  totalPrice, 
  currentRank,
  desiredRank,
  boostType 
}: PriceDisplayProps) {
  if (boostType === 'rank' && Number(desiredRank) <= Number(currentRank)) {
    return (
      <div className="text-red-500 font-medium">
        Le rang actuel doit être inférieur au rang souhaité.
      </div>
    );
  }

  const competitorPrice = getCompetitorPrice(currentRank, desiredRank, boostType);

  return (
    <div>
      <div className="flex items-center gap-2 text-red-500">
        <span className="line-through">€{competitorPrice.toFixed(2)}</span>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <AlertCircle className="w-4 h-4" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Prix pratiqué par la concurrence</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="text-2xl font-bold">
        Prix Total: <span className="text-[#31D7F4]">€{totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
}