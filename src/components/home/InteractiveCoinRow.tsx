
import { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import CoinCard from "../coin/CoinCard";

interface Coin {
  id: string;
  name: string;
  image: string;
  backImage?: string;
  era: string;
  material: string;
  origin: string;
  type: "gold" | "silver" | "copper";
}

interface InteractiveCoinRowProps {
  coins: Coin[];
  direction?: "left" | "right";
  speed?: number;
}

const InteractiveCoinRow = ({
  coins,
  direction = "left",
  speed = 20,
}: InteractiveCoinRowProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = async () => {
      const width = rowRef.current ? rowRef.current.scrollWidth : 0;
      
      if (width === 0) return;
      
      await controls.start({
        x: direction === "left" ? -width / 2 : width / 2,
        transition: {
          duration: width / speed,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    };

    if (!isHovered) {
      animate();
    } else {
      controls.stop();
    }
  }, [controls, isHovered, direction, speed]);

  const doubledCoins = [...coins, ...coins];

  return (
    <div
      className="overflow-hidden py-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        ref={rowRef}
        className="flex gap-8"
        animate={controls}
      >
        {doubledCoins.map((coin, index) => (
          <CoinCard
            key={`${coin.id}-${index}`}
            name={coin.name}
            image={coin.image}
            backImage={coin.backImage}
            era={coin.era}
            material={coin.material}
            origin={coin.origin}
            type={coin.type}
            className="w-40 h-40 flex-shrink-0"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default InteractiveCoinRow;
