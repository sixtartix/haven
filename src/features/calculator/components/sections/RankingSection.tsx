import { RankSelect } from '../selects/RankSelect';
import { WinsSelect } from '../selects/WinsSelect';

interface RankingSectionProps {
  boostType: 'rank' | 'wins';
  currentRank: string;
  desiredRank: string;
  winsCount: string;
  onCurrentRankChange: (value: string) => void;
  onDesiredRankChange: (value: string) => void;
  onWinsCountChange: (value: string) => void;
  maxRank?: number;
}

export function RankingSection({
  boostType,
  currentRank,
  desiredRank,
  winsCount,
  onCurrentRankChange,
  onDesiredRankChange,
  onWinsCountChange,
  maxRank
}: RankingSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <RankSelect 
        value={currentRank}
        onChange={onCurrentRankChange}
        label="Current Rank"
        maxRank={maxRank}
      />
      {boostType === 'rank' ? (
        <RankSelect 
          value={desiredRank}
          onChange={onDesiredRankChange}
          label="Desired Rank"
          maxRank={maxRank}
        />
      ) : (
        <WinsSelect
          value={winsCount}
          onChange={onWinsCountChange}
          label="Desired Wins"
        />
      )}
    </div>
  );
}