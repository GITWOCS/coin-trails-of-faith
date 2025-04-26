
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CoinDetailProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  coin: {
    id: string;
    name: string;
    images: string[];
    material: string;
    date: string;
    origin: string;
    ruler: string;
    obverse: string;
    reverse: string;
    history: string;
    significance: string;
    inscriptions?: {
      obverse: string;
      reverse: string;
      translation?: {
        obverse: string;
        reverse: string;
      }
    };
  };
}

const CoinDetail = ({ open, onOpenChange, coin }: CoinDetailProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === coin.images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? coin.images.length - 1 : prev - 1
    );
  };

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-medieval text-center">
            {coin.name}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="flex flex-col space-y-4">
            <div 
              className="relative aspect-square bg-black/5 rounded-lg overflow-hidden cursor-pointer"
              onClick={toggleFlip}
            >
              <motion.div
                className="w-full h-full relative preserve-3d"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute w-full h-full backface-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={`front-${currentImageIndex}`}
                      src={coin.images[currentImageIndex]}
                      alt={`${coin.name} - obverse`}
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
                  style={{ transform: 'rotateY(180deg)' }}
                >
                  {coin.images.length > 1 ? (
                    <img
                      src={coin.images[1]}
                      alt={`${coin.name} - reverse`}
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
              
              {coin.images.length > 1 && (
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

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/70 p-4 rounded-lg">
                <h4 className="text-sm font-semibold text-gray-500">Material</h4>
                <p>{coin.material}</p>
              </div>
              
              <div className="bg-white/70 p-4 rounded-lg">
                <h4 className="text-sm font-semibold text-gray-500">Date</h4>
                <p>{coin.date}</p>
              </div>
              
              <div className="bg-white/70 p-4 rounded-lg">
                <h4 className="text-sm font-semibold text-gray-500">Origin</h4>
                <p>{coin.origin}</p>
              </div>
              
              <div className="bg-white/70 p-4 rounded-lg">
                <h4 className="text-sm font-semibold text-gray-500">Ruler</h4>
                <p>{coin.ruler}</p>
              </div>
            </div>
          </div>

          <div>
            <Tabs defaultValue="analysis">
              <TabsList className="grid grid-cols-4 mb-4">
                <TabsTrigger value="analysis">Analysis</TabsTrigger>
                <TabsTrigger value="inscriptions">Inscriptions</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
                <TabsTrigger value="significance">Significance</TabsTrigger>
              </TabsList>
              
              <TabsContent value="analysis" className="space-y-4">
                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="font-medieval text-lg mb-2">Obverse</h4>
                  <p className="text-sm">{coin.obverse}</p>
                </div>
                
                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="font-medieval text-lg mb-2">Reverse</h4>
                  <p className="text-sm">{coin.reverse}</p>
                </div>
              </TabsContent>
              
              <TabsContent value="inscriptions" className="space-y-4">
                {coin.inscriptions ? (
                  <>
                    <div className="bg-white/70 p-4 rounded-lg">
                      <h4 className="font-medieval text-lg mb-2">Obverse Inscription</h4>
                      <p className="text-sm font-medium">{coin.inscriptions.obverse}</p>
                      {coin.inscriptions.translation && (
                        <p className="text-sm mt-2 italic">
                          Translation: {coin.inscriptions.translation.obverse}
                        </p>
                      )}
                    </div>
                    
                    <div className="bg-white/70 p-4 rounded-lg">
                      <h4 className="font-medieval text-lg mb-2">Reverse Inscription</h4>
                      <p className="text-sm font-medium">{coin.inscriptions.reverse}</p>
                      {coin.inscriptions.translation && (
                        <p className="text-sm mt-2 italic">
                          Translation: {coin.inscriptions.translation.reverse}
                        </p>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="bg-white/70 p-4 rounded-lg">
                    <p>No detailed inscription information available.</p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="history" className="space-y-4">
                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="font-medieval text-lg mb-2">Historical Context</h4>
                  <p className="text-sm">{coin.history}</p>
                </div>
              </TabsContent>
              
              <TabsContent value="significance" className="space-y-4">
                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="font-medieval text-lg mb-2">Cultural & Economic Significance</h4>
                  <p className="text-sm">{coin.significance}</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <style jsx global>{`
          .preserve-3d {
            transform-style: preserve-3d;
          }
          
          .backface-hidden {
            backface-visibility: hidden;
          }
        `}</style>
      </DialogContent>
    </Dialog>
  );
};

export default CoinDetail;
