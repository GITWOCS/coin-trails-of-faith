
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CoinAnalysisTabsProps {
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
}

const CoinAnalysisTabs = ({ 
  obverse, 
  reverse, 
  history, 
  significance, 
  inscriptions 
}: CoinAnalysisTabsProps) => {
  return (
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
          <p className="text-sm">{obverse}</p>
        </div>
        
        <div className="bg-white/70 p-4 rounded-lg">
          <h4 className="font-medieval text-lg mb-2">Reverse</h4>
          <p className="text-sm">{reverse}</p>
        </div>
      </TabsContent>
      
      <TabsContent value="inscriptions" className="space-y-4">
        {inscriptions ? (
          <>
            <div className="bg-white/70 p-4 rounded-lg">
              <h4 className="font-medieval text-lg mb-2">Obverse Inscription</h4>
              <p className="text-sm font-medium">{inscriptions.obverse}</p>
              {inscriptions.translation && (
                <p className="text-sm mt-2 italic">
                  Translation: {inscriptions.translation.obverse}
                </p>
              )}
            </div>
            
            <div className="bg-white/70 p-4 rounded-lg">
              <h4 className="font-medieval text-lg mb-2">Reverse Inscription</h4>
              <p className="text-sm font-medium">{inscriptions.reverse}</p>
              {inscriptions.translation && (
                <p className="text-sm mt-2 italic">
                  Translation: {inscriptions.translation.reverse}
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
          <p className="text-sm">{history}</p>
        </div>
      </TabsContent>
      
      <TabsContent value="significance" className="space-y-4">
        <div className="bg-white/70 p-4 rounded-lg">
          <h4 className="font-medieval text-lg mb-2">Cultural & Economic Significance</h4>
          <p className="text-sm">{significance}</p>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default CoinAnalysisTabs;
