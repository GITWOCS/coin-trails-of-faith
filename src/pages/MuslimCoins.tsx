
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const MuslimCoins = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-medieval text-center mb-8">Muslim Coins</h1>
          
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm shadow-lg rounded-lg p-6">
            <p className="mb-6 text-lg">
              Muslim coins during the Crusades era represent the sophisticated monetary systems of Islamic 
              dynasties that confronted and coexisted with the Crusader states. These coins showcase exquisite 
              calligraphy, innovative minting techniques, and important historical context.
            </p>
            
            <Tabs defaultValue="fatimid" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <TabsTrigger value="fatimid">Fatimid Dinar</TabsTrigger>
                <TabsTrigger value="ayyubid">Ayyubid Dinar</TabsTrigger>
                <TabsTrigger value="umayyad">Umayyad Dinar</TabsTrigger>
                <TabsTrigger value="mamluk">Mamluk Dirham</TabsTrigger>
              </TabsList>
              
              <TabsContent value="fatimid" className="mt-6 p-4 bg-parchment rounded-md">
                <h2 className="text-2xl font-medieval mb-4">Fatimid Dinar</h2>
                <p className="mb-4">
                  The Fatimid Caliphate produced some of the finest gold dinars of the medieval Islamic world,
                  with distinctive concentric circle inscriptions and precise weight standards.
                </p>
                <p>
                  More detailed analysis will be provided in upcoming updates.
                </p>
              </TabsContent>
              
              <TabsContent value="ayyubid" className="mt-6 p-4 bg-parchment rounded-md">
                <h2 className="text-2xl font-medieval mb-4">Ayyubid Dinar (Saladin)</h2>
                <p className="mb-4">
                  Saladin's coins represented his power as the unifier against the Crusader presence, often
                  featuring inscriptions emphasizing Sunni orthodoxy and legitimacy.
                </p>
                <p>
                  More detailed analysis will be provided in upcoming updates.
                </p>
              </TabsContent>
              
              <TabsContent value="umayyad" className="mt-6 p-4 bg-parchment rounded-md">
                <h2 className="text-2xl font-medieval mb-4">Umayyad Dinar</h2>
                <p className="mb-4">
                  Though predating the Crusades, Umayyad gold coinage established standards that influenced
                  all subsequent Islamic coinages during the Crusader period.
                </p>
                <p>
                  More detailed analysis will be provided in upcoming updates.
                </p>
              </TabsContent>
              
              <TabsContent value="mamluk" className="mt-6 p-4 bg-parchment rounded-md">
                <h2 className="text-2xl font-medieval mb-4">Mamluk Dirham</h2>
                <p className="mb-4">
                  The Mamluks, who ultimately expelled the Crusaders from the Levant, produced distinctive
                  silver dirhams with complex calligraphy and titulature.
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

export default MuslimCoins;
