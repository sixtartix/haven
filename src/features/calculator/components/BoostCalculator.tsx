import { useState } from 'react';
import { RankingSection } from './sections/RankingSection';
import { GameModeSelect } from './game/GameModeSelect';
import { GameSelector } from './game/GameSelector';
import { BoostTypeSelect } from './boost/BoostTypeSelect';
import { BoostOptions } from './boost/BoostOptions';
import { PriceDisplay } from './price/PriceDisplay';
import { Header } from './layout/Header';
import { useBoostPrice } from '../hooks/useBoostPrice';
import { gameModes } from '../types/gameModes';
import { RegionPlatformSection } from './sections/RegionPlatformSection';
import { ActionButton } from './actions/ActionButton';
import { DiscordSection } from './sections/DiscordSection';

export function BoostCalculator() {
  const [boostType, setBoostType] = useState<'rank' | 'wins'>('rank');
  const [currentRank, setCurrentRank] = useState('1');
  const [desiredRank, setDesiredRank] = useState('1');
  const [winsCount, setWinsCount] = useState('10');
  const [gameMode, setGameMode] = useState('1v1');
  const [discordUsername, setDiscordUsername] = useState('');
  const [discordTag, setDiscordTag] = useState('');
  const [options, setOptions] = useState({
    playWithBooster: false,
    priorityOrder: false,
    extraWin: false,
    tournamentTitle: false,
  });

  const handleGameModeChange = (newGameMode: string) => {
    setGameMode(newGameMode);
    setCurrentRank('1');
    setDesiredRank('1');
  };

  const selectedGameMode = gameModes.find(mode => mode.id === gameMode);
  const { totalPrice, originalPrice } = useBoostPrice(
    currentRank,
    desiredRank,
    options,
    boostType,
    winsCount,
    selectedGameMode?.priceMultiplier,
    gameMode
  );

  const isValidForm = boostType === 'rank' ? 
    Number(desiredRank) > Number(currentRank) : true;

  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-[#0B0B1E] to-[#070716] p-4 md:p-8 text-white">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="bg-[#0B0B1E]/80 backdrop-blur-lg p-6 md:p-10 rounded-3xl shadow-2xl border border-[#31D7F4]/10">
          <Header />
          
          <div className="space-y-8 mt-10">
            <div className="flex flex-col md:flex-row gap-6">
              <GameSelector />
              <div className="flex-1">
                <BoostTypeSelect type={boostType} onChange={setBoostType} />
              </div>
            </div>

            <RankingSection
              boostType={boostType}
              currentRank={currentRank}
              desiredRank={desiredRank}
              winsCount={winsCount}
              onCurrentRankChange={setCurrentRank}
              onDesiredRankChange={setDesiredRank}
              onWinsCountChange={setWinsCount}
              maxRank={selectedGameMode?.maxRank}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <RegionPlatformSection />
              <GameModeSelect value={gameMode} onChange={handleGameModeChange} />
            </div>

            <DiscordSection
              username={discordUsername}
              tag={discordTag}
              onUsernameChange={setDiscordUsername}
              onTagChange={setDiscordTag}
            />

            <BoostOptions 
              options={options} 
              onChange={setOptions}
              desiredRank={desiredRank}
              gameMode={gameMode}
            />

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-10">
              <PriceDisplay 
                originalPrice={originalPrice} 
                totalPrice={totalPrice}
                currentRank={currentRank}
                desiredRank={desiredRank}
                boostType={boostType}
              />
              <ActionButton 
                disabled={!isValidForm}
                discordUsername={discordUsername}
                orderDetails={{
                  discordUsername,
                  currentRank,
                  desiredRank,
                  gameMode,
                  options,
                  totalPrice
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}