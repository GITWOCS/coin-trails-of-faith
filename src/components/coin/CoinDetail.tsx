
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
            <div className="relative aspect-square bg-black/5 rounded-lg overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={coin.images[currentImageIndex]}
                  alt={`${coin.name} - image ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </AnimatePresence>
            </div>

            {coin.images.length > 1 && (
              <div className="flex justify-center space-x-2">
                {coin.images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      currentImageIndex === index
                        ? "bg-gold"
                        : "bg-gray-300"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            )}

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
      </DialogContent>
    </Dialog>
  );
};

export default CoinDetail;
