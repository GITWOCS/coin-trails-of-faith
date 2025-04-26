
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import CoinDetail from "@/components/coin/CoinDetail";
import CirculationMap from "@/components/circulation/CirculationMap";
import CirculationIntro from "@/components/circulation/CirculationIntro";
import CirculationGrid from "@/components/circulation/CirculationGrid";
import CirculationConclusion from "@/components/circulation/CirculationConclusion";
import { circulationCoins } from "@/data/circulationCoins";

const Circulation = () => {
  const [selectedCoin, setSelectedCoin] = useState<string | null>(null);

  const handleCoinClick = (coinId: string) => {
    setSelectedCoin(coinId);
  };

  const selectedCoinData = circulationCoins.find(coin => coin.id === selectedCoin);

  return (
    <Layout>
      <div className="page-container">
        <h1 className="section-heading">Circulation & Cross-Cultural Exchange</h1>
        
        <CirculationIntro />
        <CirculationMap />
        
        <h2 className="subsection-heading mt-12">Key Coins That Crossed Borders</h2>
        <p className="prose max-w-none mb-8">
          Several coins played particularly significant roles in facilitating cross-cultural 
          exchange during the Crusades. Their widespread acceptance and circulation reveal economic 
          networks that often contradicted political and religious narratives of separation and conflict.
        </p>
        
        <CirculationGrid coins={circulationCoins} onCoinClick={handleCoinClick} />
        <CirculationConclusion />
      </div>

      {selectedCoinData && (
        <CoinDetail
          open={!!selectedCoin}
          onOpenChange={(open) => {
            if (!open) setSelectedCoin(null);
          }}
          coin={selectedCoinData}
        />
      )}
    </Layout>
  );
};

export default Circulation;
