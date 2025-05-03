
import React from 'react';
import { CoinData } from '@/data/circulationCoins';
import CoinCard from '@/components/coin/CoinCard';

interface CirculationGridProps {
  coins: CoinData[];
  onCoinClick: (coinId: string) => void;
}

const CirculationGrid = ({ coins, onCoinClick }: CirculationGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      {coins.map((coin) => (
        <div key={coin.id} className="flex flex-col items-center group">
          <div className="relative transform transition-all duration-300 group-hover:scale-105">
            <CoinCard
              name={coin.name}
              image={coin.images[0]}
              backImage={coin.images.length > 1 ? coin.images[1] : undefined}
              era={coin.date}
              material={coin.material}
              origin={coin.origin}
              type={coin.material.toLowerCase() === "gold" ? "gold" : "silver"}
              className="w-48 h-48 mx-auto mb-4 cursor-pointer"
              onClick={() => onCoinClick(coin.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CirculationGrid;
