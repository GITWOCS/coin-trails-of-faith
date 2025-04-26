
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import CoinImageViewer from "./CoinImageViewer";
import CoinDetailsGrid from "./CoinDetailsGrid";
import CoinAnalysisTabs from "./CoinAnalysisTabs";

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
            <CoinImageViewer images={coin.images} name={coin.name} />
            <CoinDetailsGrid
              material={coin.material}
              date={coin.date}
              origin={coin.origin}
              ruler={coin.ruler}
            />
          </div>

          <div>
            <CoinAnalysisTabs
              obverse={coin.obverse}
              reverse={coin.reverse}
              history={coin.history}
              significance={coin.significance}
              inscriptions={coin.inscriptions}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CoinDetail;
