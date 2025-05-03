
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Info, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { circulationCoins } from "@/data/circulationCoins";

// Sample coin data - in a real app, this would come from an API
const coinData = [
  {
    id: "fatimid-daily",
    title: "Fatimid Gold Dinar",
    image: "/lovable-uploads/e971a400-9a65-4f8b-82d5-ce28d82131a0.png",
    backImage: "/lovable-uploads/c50e27d8-2e9a-4fdd-9ac9-7f2dc6e0c56f.png",
    description: "Minted during the height of Fatimid power in Egypt (969-1171), this gold dinar features Kufic script declaring the Islamic faith and the name of the ruling caliph.",
    category: "muslim",
    year: "11th century",
    mint: "Cairo",
    material: "Gold",
    diameter: "23mm",
    weight: "4.15g",
    link: "/muslim-coins",
    funFact: "The Fatimids maintained such high standards for their gold coinage that European traders actually preferred them to their own coins for international trade."
  },
  {
    id: "crusader-daily",
    title: "Jerusalem Crusader Denier",
    image: "/lovable-uploads/d458abdc-f748-44b0-a367-224498828ed1.png",
    backImage: "/lovable-uploads/4b735d91-8e13-4833-93bd-0a68008111e5.png",
    description: "Struck in the Latin Kingdom of Jerusalem, this silver denier shows strong Western European influence while being adapted for circulation in the Holy Land.",
    category: "christian",
    year: "12th century",
    mint: "Jerusalem",
    material: "Silver",
    diameter: "18mm",
    weight: "0.92g",
    link: "/christian-coins",
    funFact: "Crusader coins often used religious imagery as propaganda to legitimize their rule in the Holy Land."
  },
  {
    id: "byzantine-daily",
    title: "Byzantine Hyperpyron",
    image: "/lovable-uploads/67d42e0c-503b-44a1-817e-4fe4e3e8dc2e.png",
    backImage: "/lovable-uploads/a2982c82-6fb7-4c8d-ad99-71d91bd73470.png",
    description: "The Byzantine Empire's gold coin featuring Christ Pantocrator, widely used throughout the Mediterranean during the Crusades era.",
    category: "christian",
    year: "12th century",
    mint: "Constantinople",
    material: "Gold",
    diameter: "27mm",
    weight: "4.45g",
    link: "/christian-coins",
    funFact: "The Byzantine Hyperpyron was so trusted as a store of value that it was accepted throughout the Muslim world despite bearing Christian imagery."
  },
  {
    id: "umayyad-daily",
    title: "Umayyad Dinar",
    image: "/lovable-uploads/b77d9162-8ae7-45c5-95c8-3900af76a12f.png",
    backImage: "/lovable-uploads/6c2a747e-0bf3-4cf8-b460-65809e9c7ad7.png",
    description: "The standard gold coin of the Umayyad Caliphate, featuring pure textual inscriptions in elegant Arabic calligraphy.",
    category: "muslim",
    year: "8th century",
    mint: "Damascus",
    material: "Gold",
    diameter: "20mm",
    weight: "4.25g",
    link: "/muslim-coins",
    funFact: "The Umayyad dinar's weight and purity standards were so consistent that they remained unchanged for centuries."
  }
];

const CoinOfTheDay = () => {
  const [flipped, setFlipped] = useState(false);
  const [coin, setCoin] = useState(coinData[0]);
  const [showFact, setShowFact] = useState(false);
  
  // Select a coin based on the day of the year
  useEffect(() => {
    const today = new Date();
    // Fix: Calculate days using milliseconds rather than direct subtraction
    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const diff = today.getTime() - startOfYear.getTime();
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    const coinIndex = dayOfYear % coinData.length;
    setCoin(coinData[coinIndex]);
  }, []);

  const flipCoin = () => {
    setFlipped(!flipped);
  };

  const revealFunFact = () => {
    setShowFact(true);
    toast.success("Fun Fact Revealed!", {
      description: coin.funFact,
      duration: 5000,
    });
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Calendar className="text-gold" />
          <h2 className="text-3xl font-medieval">Coin of the Day</h2>
          <Sparkles className="text-gold animate-pulse" />
        </div>
        <p className="max-w-3xl mx-auto text-gray-600">
          Each day we feature a different remarkable coin from our collection. Click on the coin to see both sides.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Coin Display (2 columns on medium screens) */}
        <div className="md:col-span-2 flex flex-col items-center justify-center">
          <div 
            className="w-60 h-60 relative cursor-pointer mb-6"
            onClick={flipCoin}
          >
            <motion.div
              className="w-full h-full absolute backface-hidden rounded-full shadow-lg"
              animate={{
                rotateY: flipped ? 180 : 0,
              }}
              transition={{ duration: 0.6 }}
              style={{
                backfaceVisibility: "hidden",
              }}
            >
              <img
                src={coin.image}
                alt={`${coin.title} - Front`}
                className="w-full h-full object-contain rounded-full border-4 border-gold/50"
              />
            </motion.div>
            <motion.div
              className="w-full h-full absolute backface-hidden rounded-full shadow-lg"
              initial={{ rotateY: 180 }}
              animate={{
                rotateY: flipped ? 360 : 180,
              }}
              transition={{ duration: 0.6 }}
              style={{
                backfaceVisibility: "hidden",
              }}
            >
              <img
                src={coin.backImage}
                alt={`${coin.title} - Back`}
                className="w-full h-full object-contain rounded-full border-4 border-gold/50"
              />
            </motion.div>
          </div>
          <div className="text-center">
            <p className="text-sm italic">Click to flip</p>
            <h3 className="font-medieval text-xl mt-2">{coin.title}</h3>
          </div>
        </div>

        {/* Coin Details (3 columns on medium screens) */}
        <div className={`md:col-span-3 ${coin.category === "christian" ? "bg-christian/10" : "bg-muslim/10"} rounded-lg p-6`}>
          <h3 className="font-medieval text-2xl mb-4">{coin.title}</h3>
          <p className="mb-6 text-gray-700">{coin.description}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="border-r border-gray-300 pr-4">
              <p className="text-sm text-gray-500">Period</p>
              <p className="font-semibold">{coin.year}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Mint</p>
              <p className="font-semibold">{coin.mint}</p>
            </div>
            <div className="border-r border-gray-300 pr-4">
              <p className="text-sm text-gray-500">Material</p>
              <p className="font-semibold">{coin.material}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Size</p>
              <p className="font-semibold">{coin.diameter} / {coin.weight}</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-4">
            {!showFact && (
              <Button 
                variant="outline" 
                className="gap-2 border-gold hover:bg-gold/20"
                onClick={revealFunFact}
              >
                <Sparkles size={16} />
                Reveal Fun Fact
              </Button>
            )}
            <Link to={coin.link}>
              <Button 
                className={`gap-2 ${
                  coin.category === "christian" 
                    ? "bg-christian hover:bg-christian-dark" 
                    : "bg-muslim hover:bg-muslim-dark"
                }`}
              >
                <Info size={16} />
                Explore {coin.category === "christian" ? "Christian" : "Muslim"} Coins
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinOfTheDay;
