
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

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    if (onClick) onClick();
  };

  return (
    <motion.div
      className={cn(
        "coin-card cursor-pointer",
        type === "silver" && "coin-silver",
        type === "copper" && "bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleFlip}
    >
      <div
        className={cn(
          "coin-card-inner",
          isFlipped ? "transform rotate-y-180" : ""
        )}
      >
        <div className="coin-front">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <h3 className="text-lg font-medieval text-black">{name}</h3>
              <p className="text-xs text-black/70">{era}</p>
            </div>
          )}
        </div>

        <div className="coin-back">
          {backImage ? (
            <img
              src={backImage}
              alt={`Reverse of ${name}`}
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
      </div>
    </motion.div>
  );
};

export default CoinCard;
