
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import InteractiveCoinRow from "@/components/home/InteractiveCoinRow";
import CoinTabsDetail from "@/components/coin/CoinTabsDetail";

const featuredChristianCoins = [
  {
    id: "cross-denier",
    name: "Cross Denier",
    image: "/placeholder.svg",
    era: "12th Century",
    material: "Silver",
    origin: "Kingdom of Jerusalem",
    type: "silver" as const,
  },
  {
    id: "denier-antioch",
    name: "Denier of Bohemond III",
    image: "/placeholder.svg",
    era: "12th Century",
    material: "Silver",
    origin: "Antioch",
    type: "silver" as const,
  },
  {
    id: "constantinople-latin",
    name: "Latin Kingdom Constantinople",
    image: "/placeholder.svg",
    era: "13th Century",
    material: "Gold",
    origin: "Constantinople",
    type: "gold" as const,
  },
  {
    id: "richard-i",
    name: "Coin of Richard I",
    image: "/placeholder.svg",
    era: "Late 12th Century",
    material: "Gold",
    origin: "England & Holy Land",
    type: "gold" as const,
  },
];

const ChristianCoins = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-medieval text-center mb-8">Christian Coins</h1>

          {/* Featured Coins Interactive Row */}
          <div className="mb-10">
            <h2 className="text-2xl font-medieval text-center mb-2">Featured Coins</h2>
            <p className="text-center mb-4 text-gray-700">
              Hover to pause—click any coin to see both sides and a full analysis!
            </p>
            <InteractiveCoinRow coins={featuredChristianCoins} direction="left" speed={18} />
          </div>

          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm shadow-lg rounded-lg p-6">
            <p className="mb-6 text-lg">
              Christian coins from the Crusader era represent a fascinating intersection of faith,
              politics, and economics. These coins not only served as currency but also as powerful
              symbols of Christian presence in the Holy Land.
            </p>
            
            <Tabs defaultValue="kingdom-jerusalem" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <TabsTrigger value="kingdom-jerusalem">Kingdom of Jerusalem</TabsTrigger>
                <TabsTrigger value="antioch">Antioch</TabsTrigger>
                <TabsTrigger value="constantinople">Constantinople</TabsTrigger>
                <TabsTrigger value="richard">Richard I</TabsTrigger>
              </TabsList>
              
              <TabsContent value="kingdom-jerusalem" className="mt-6 p-4 bg-parchment rounded-md">
                <h2 className="text-2xl font-medieval mb-4">Cross Denier of the Kingdom of Jerusalem</h2>
                <CoinTabsDetail
                  context={`The Cross Denier was one of the most iconic coins of the Crusader states, featuring a prominent cross design that symbolized Christian rule in Jerusalem.
This coin was widely circulated among Crusaders and local populations, reflecting the Christian kingdom's efforts to establish its own monetary identity in the Holy Land.
Its simple yet powerful imagery—centered on the cross—made it easily identifiable and a daily reminder of the religious mission of the Crusaders.`}
                  religion={`The presence of the cross was a clear assertion of Christianity in regions once dominated by Islamic or Byzantine rulers.
Inscriptions often referred to Christ or Christian leaders, highlighting the claim to religious legitimacy in the Crusader state.
These coins reinforced Christian values and the authority of the Latin church in Jerusalem among both Crusaders and local converts.`}
                  political={`The issue of a unique denier marked the independence and sovereignty of the Kingdom of Jerusalem.
Rulers used coinage to assert their claim over the land, and the silver content was an important part of local and regional trade.
Control over coin production—especially the right to mint with Christian symbology—was a critical aspect of Crusader state power.`}
                  insight={`The Cross Denier is emblematic of the way Crusaders used currency to stake both their economic presence and their ideological intentions.
Its widespread use by diverse peoples shows how religious and political identity could be reinforced (or even challenged) through the simple medium of a coin.`}
                />
              </TabsContent>
              
              <TabsContent value="antioch" className="mt-6 p-4 bg-parchment rounded-md">
                <h2 className="text-2xl font-medieval mb-4">Denier of Bohemond III (Antioch)</h2>
                <CoinTabsDetail
                  context="More detailed analysis will be provided in upcoming updates."
                  religion=""
                  political=""
                  insight=""
                />
              </TabsContent>
              
              <TabsContent value="constantinople" className="mt-6 p-4 bg-parchment rounded-md">
                <h2 className="text-2xl font-medieval mb-4">Coins of the Latin Kingdom of Constantinople</h2>
                <CoinTabsDetail
                  context="More detailed analysis will be provided in upcoming updates."
                  religion=""
                  political=""
                  insight=""
                />
              </TabsContent>
              
              <TabsContent value="richard" className="mt-6 p-4 bg-parchment rounded-md">
                <h2 className="text-2xl font-medieval mb-4">Coin of Richard I (the Lionheart)</h2>
                <CoinTabsDetail
                  context="More detailed analysis will be provided in upcoming updates."
                  religion=""
                  political=""
                  insight=""
                />
              </TabsContent>
            </Tabs>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default ChristianCoins;

