
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
    setIsFlipped(!isFlipped);
    e.stopPropagation();
  };

  return (
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
      <div
        className={cn(
          "w-full h-full transition-all duration-500 relative",
          isFlipped ? "rotate-y-180" : ""
        )}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >
        <div 
          className="coin-front absolute w-full h-full rounded-full backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
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

        <div 
          className="coin-back absolute w-full h-full rounded-full backface-hidden"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)" 
          }}
        >
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

      <style jsx global>{`
        @keyframes rotate-y-180 {
          from { transform: rotateY(0); }
          to { transform: rotateY(180deg); }
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </motion.div>
  );
};

export default CoinCard;
