
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CoinImageViewerProps {
  images: string[];
  name: string;
}

const CoinImageViewer = ({ images, name }: CoinImageViewerProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="relative aspect-square bg-black/5 rounded-lg overflow-hidden cursor-pointer"
      onClick={toggleFlip}
    >
      <motion.div
        className="w-full h-full relative preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div 
          className="absolute w-full h-full backface-hidden" 
          style={{ backfaceVisibility: "hidden" }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={`front-${currentImageIndex}`}
              src={images[currentImageIndex]}
              alt={`${name} - obverse`}
              className="w-full h-full object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          </AnimatePresence>
          <div className="absolute bottom-2 left-0 right-0 flex justify-center">
            <div className="bg-black/70 text-white px-3 py-1 rounded-full text-sm">
              Obverse (Front) - Click to flip
            </div>
          </div>
        </div>
        
        <div 
          className="absolute w-full h-full backface-hidden"
          style={{ 
            backfaceVisibility: "hidden", 
            transform: 'rotateY(180deg)' 
          }}
        >
          {images.length > 1 ? (
            <img
              src={images[1]}
              alt={`${name} - reverse`}
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <p>Reverse image not available</p>
            </div>
          )}
          <div className="absolute bottom-2 left-0 right-0 flex justify-center">
            <div className="bg-black/70 text-white px-3 py-1 rounded-full text-sm">
              Reverse (Back) - Click to flip
            </div>
          </div>
        </div>
      </motion.div>
      
      {images.length > 1 && (
        <>
          <button 
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-1 hover:bg-black/70"
            onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button 
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-1 hover:bg-black/70"
            onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}
    </div>
  );
};

export default CoinImageViewer;
