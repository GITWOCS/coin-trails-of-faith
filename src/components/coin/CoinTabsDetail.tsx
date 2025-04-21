
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface CoinTabsDetailProps {
  context: string;
  religion: string;
  political: string;
  insight: string;
}

const CoinTabsDetail = ({ context, religion, political, insight }: CoinTabsDetailProps) => (
  <Tabs defaultValue="context" className="mt-4">
    <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
      <TabsTrigger value="context">Historical Context</TabsTrigger>
      <TabsTrigger value="religion">Religious Significance</TabsTrigger>
      <TabsTrigger value="political">Political Significance</TabsTrigger>
      <TabsTrigger value="insight">Insight</TabsTrigger>
    </TabsList>
    <TabsContent value="context" className="mt-4 bg-white/80 backdrop-blur-sm p-4 rounded-md">{context}</TabsContent>
    <TabsContent value="religion" className="mt-4 bg-white/80 backdrop-blur-sm p-4 rounded-md">{religion}</TabsContent>
    <TabsContent value="political" className="mt-4 bg-white/80 backdrop-blur-sm p-4 rounded-md">{political}</TabsContent>
    <TabsContent value="insight" className="mt-4 bg-white/80 backdrop-blur-sm p-4 rounded-md">{insight}</TabsContent>
  </Tabs>
);

export default CoinTabsDetail;
