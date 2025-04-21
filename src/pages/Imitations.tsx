
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const Imitations = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-medieval text-center mb-8">Imitations: The Greatest Flattery</h1>
          
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm shadow-lg rounded-lg p-6">
            <p className="mb-6 text-lg">
              The practice of imitation coinage during the Crusades era reveals fascinating insights into 
              cross-cultural exchange, pragmatic economics, and the complex interplay of religious and 
              political symbolism across Mediterranean societies.
            </p>
            
            <Tabs defaultValue="fatimid-imitation" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <TabsTrigger value="fatimid-imitation">Imitation Fatimid Dinar</TabsTrigger>
                <TabsTrigger value="sicilian">Norman Sicilian Coins</TabsTrigger>
                <TabsTrigger value="tripoli">Tripoli Coins</TabsTrigger>
                <TabsTrigger value="kalima">Crusader Kalima Coins</TabsTrigger>
              </TabsList>
              
              <TabsContent value="fatimid-imitation" className="mt-6 p-4 bg-parchment rounded-md">
                <h2 className="text-2xl font-medieval mb-4">Crusader Imitation Fatimid Dinar</h2>
                <p className="mb-4">
                  Crusader states sometimes minted gold coins that closely resembled Fatimid dinars, 
                  demonstrating the practical need to produce currency that would be accepted in regional trade.
                </p>
                <p>
                  More detailed analysis will be provided in upcoming updates.
                </p>
              </TabsContent>
              
              <TabsContent value="sicilian" className="mt-6 p-4 bg-parchment rounded-md">
                <h2 className="text-2xl font-medieval mb-4">Norman Sicilian Trilingual Coin (Roger II)</h2>
                <p className="mb-4">
                  The Norman Kingdom of Sicily under Roger II produced remarkable trilingual coins with 
                  inscriptions in Arabic, Greek, and Latin, reflecting Sicily's multicultural character.
                </p>
                <p>
                  More detailed analysis will be provided in upcoming updates.
                </p>
              </TabsContent>
              
              <TabsContent value="tripoli" className="mt-6 p-4 bg-parchment rounded-md">
                <h2 className="text-2xl font-medieval mb-4">Tripoli Coin with Cross and Arabic Script</h2>
                <p className="mb-4">
                  The County of Tripoli minted coins that combined Christian symbols like crosses with 
                  Arabic inscriptions, creating a hybrid currency that served diverse populations.
                </p>
                <p>
                  More detailed analysis will be provided in upcoming updates.
                </p>
              </TabsContent>
              
              <TabsContent value="kalima" className="mt-6 p-4 bg-parchment rounded-md">
                <h2 className="text-2xl font-medieval mb-4">Crusader Coin Bearing the Islamic Kalima</h2>
                <p className="mb-4">
                  Some Crusader coinages reproduced Islamic religious declarations (the Kalima or Shahada),
                  either out of ignorance or as a pragmatic decision to create recognizable currency.
                </p>
                <p>
                  More detailed analysis will be provided in upcoming updates.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Imitations;
