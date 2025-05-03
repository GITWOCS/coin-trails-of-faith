
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CoinCardProps {
  name: string;
  image: string;
  backImage?: string;
  era: string;
  material: string;
  origin: string;
  className?: string;
  type?: "gold" | "silver" | "copper";
  onClick?: () => void;
}

const CoinCard = ({
  name,
  image,
  backImage,
  era,
  material,
  origin,
  className,
  type = "gold",
  onClick,
}: CoinCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (e: React.MouseEvent) => {
    if (onClick) {
      onClick();
      return; // If there's an onClick handler, use that instead of flipping
    }
    
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex flex-col items-center">
      <motion.div
        className={cn(
          "coin-card cursor-pointer relative",
          type === "silver" && "coin-silver",
          type === "copper" && "bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800",
          className
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleFlip}
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d"
        }}
      >
        <motion.div
          className="w-full h-full relative"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Front of coin (obverse) */}
          <div 
            className="coin-front absolute w-full h-full rounded-full"
            style={{ backfaceVisibility: "hidden" }}
          >
            {image ? (
              <img
                src={image}
                alt={`${name} - obverse`}
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                <h3 className="text-lg font-medieval text-black">{name}</h3>
                <p className="text-xs text-black/70">{era}</p>
              </div>
            )}
          </div>

          {/* Back of coin (reverse) */}
          <div 
            className="coin-back absolute w-full h-full rounded-full"
            style={{ 
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)" 
            }}
          >
            {backImage ? (
              <img
                src={backImage}
                alt={`${name} - reverse`}
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-full p-2">
                <h3 className="text-sm font-medieval text-black mb-1">{name}</h3>
                <p className="text-xs text-black/70">{material}</p>
                <p className="text-xs text-black/70">{origin}</p>
                <p className="text-xs text-black/70">{era}</p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
      
      <h3 className="text-lg font-medieval text-center mt-2">{name}</h3>
      <p className="text-sm text-center text-gray-600">{era}</p>
    </div>
  );
};

export default CoinCard;
