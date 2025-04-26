
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
        <div key={coin.id} className="flex flex-col items-center">
          <CoinCard
            name={coin.name}
            image={coin.images[0]}
            era={coin.date}
            material={coin.material}
            origin={coin.origin}
            type={coin.material.toLowerCase() === "gold" ? "gold" : "silver"}
            className="w-48 h-48 mx-auto mb-4"
            onClick={() => onCoinClick(coin.id)}
          />
          <h3 className="text-lg font-medieval text-center">{coin.name}</h3>
          <p className="text-sm text-center text-gray-600">{coin.date}</p>
        </div>
      ))}
    </div>
  );
};

export default CirculationGrid;
