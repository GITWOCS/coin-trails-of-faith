
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const InterestingFacts = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-medieval text-center mb-8">Interesting Facts</h1>
          
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm shadow-lg rounded-lg p-6">
            <p className="mb-6 text-lg">
              Discover fascinating insights into the complex world of medieval coinage, where culture, power, and commerce intersected in unexpected ways.
            </p>
            
            <Tabs defaultValue="multilingual" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <TabsTrigger value="multilingual">Multilingual Coins</TabsTrigger>
                <TabsTrigger value="counterfeits">Medieval Counterfeiting</TabsTrigger>
                <TabsTrigger value="women">Women on Coins</TabsTrigger>
                <TabsTrigger value="technology">Minting Technology</TabsTrigger>
              </TabsList>
              
              <TabsContent value="multilingual" className="mt-6 p-4 bg-parchment rounded-md space-y-6">
                <div>
                  <h3 className="font-medieval text-lg mb-2">1. Trilingual Coinage</h3>
                  <p>Some coins had Arabic, Greek, and Latin: all on the same coin. The Norman Sicilian trilingual coins issued under Roger II carried inscriptions in three languages simultaneously. This was not decorative but governance through language, ensuring everyone in a multi-faith, multi-lingual kingdom could understand and trust the currency. It's hard to imagine modern states printing bills in three unrelated scripts just to keep the peace.</p>
                </div>
                
                <div>
                  <h3 className="font-medieval text-lg mb-2">2. Strategic Use of Arabic Script</h3>
                  <p>Crusader coins used Arabic script, even when minted by Christians. Many Crusader coins in places like Tripoli or Jerusalem used Arabic inscriptions to appeal to local traders. These coins could say "In the name of God" in Arabic on one side and have a Christian cross on the other. This was not a mistake but strategic imitation. Language on coins was not about identity but about acceptance.</p>
                </div>
                
                <div>
                  <h3 className="font-medieval text-lg mb-2">3. Cross-Cultural Currency</h3>
                  <p>Some Christian rulers minted coins that Muslims could read, but their own armies could not. Coins minted for trade in Muslim-majority cities were often entirely in Arabic, which most European Crusaders couldn't understand. Yet they continued minting them, knowing the power of visual familiarity in a bustling Levantine market.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="counterfeits" className="mt-6 p-4 bg-parchment rounded-md space-y-6">
                <div>
                  <h3 className="font-medieval text-lg mb-2">1. Superior Counterfeits</h3>
                  <p>Some counterfeiters in the Middle Ages were so good, their coins circulated better than official ones. In some cases, forgers produced coins with higher silver content than official mints, meaning the fake was literally more valuable than the real thing. This turned entire regions into "trust the coin, not the ruler" economies.</p>
                </div>
                
                <div>
                  <h3 className="font-medieval text-lg mb-2">2. Faithful Imitations</h3>
                  <p>Crusaders didn't just counterfeit Muslim coins, they copied the mistakes too. Some imitation dinars are so faithful that they even preserve spelling errors or decorative quirks from the original Islamic coins. That means they weren't reading the Arabic but copying it like artists tracing calligraphy they couldn't understand.</p>
                </div>
                
                <div>
                  <h3 className="font-medieval text-lg mb-2">3. Emergency Currency</h3>
                  <p>Counterfeit coins weren't always made to deceive. In some Crusader cities, "forgeries" were unofficial coins minted during emergencies or shortages with full public knowledge. People used them anyway, because trust in metal often trumped official endorsement.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="women" className="mt-6 p-4 bg-parchment rounded-md space-y-6">
                <div>
                  <h3 className="font-medieval text-lg mb-2">1. Invisible Power</h3>
                  <p>Women almost never appeared on Crusader or Islamic coins, but not because they weren't powerful. Queens and noblewomen like Melisende of Jerusalem played huge political roles, but they were invisible in coinage, which was one of the main public markers of power. That silence speaks volumes.</p>
                </div>
                
                <div>
                  <h3 className="font-medieval text-lg mb-2">2. Byzantine Exception</h3>
                  <p>Byzantine empresses, however, did appear, sometimes with equal billing. Coins from the Byzantine world show Empress Irene standing beside her son or husband, with inscriptions naming her as co-ruler. That was centuries ahead of what the Crusader states ever allowed on their coins.</p>
                </div>
                
                <div>
                  <h3 className="font-medieval text-lg mb-2">3. Hidden Authority</h3>
                  <p>Some Islamic coins were minted under queens, even if they weren't shown. In parts of the Islamic world, women like Queen Arwa al-Sulayhi of Yemen had coins minted in their name, but never with their face, maintaining religious decorum while quietly asserting power.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="technology" className="mt-6 p-4 bg-parchment rounded-md space-y-6">
                <div>
                  <h3 className="font-medieval text-lg mb-2">1. Unique Shapes</h3>
                  <p>Some coins were so thin, they were bent into bowl shapes on purpose. Byzantine coins, especially under the late empire, were shaped like shallow cups to help with stacking and counting. Some Crusader mints adopted this format, creating oddly satisfying piles of bowl-shaped money.</p>
                </div>
                
                <div>
                  <h3 className="font-medieval text-lg mb-2">2. Resourceful Reuse</h3>
                  <p>Crusaders reused enemy coins by simply striking over them. Rather than melting down old Islamic or Byzantine coins, Crusaders sometimes just hammered new designs on top. This was faster, cheaper, and way more chaotic, some coins have Christian crosses barely hiding under faded Arabic script.</p>
                </div>
                
                <div>
                  <h3 className="font-medieval text-lg mb-2">3. Artful Text</h3>
                  <p>Islamic coins were minted with no imagery at all, but with perfectly balanced lines of text. This wasn't laziness but theology and art fused. The precision of Islamic inscriptions required a level of craftsmanship that rivaled figurative designs, and the result was a coin that was symmetrical, legible, and sacred.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default InterestingFacts;
