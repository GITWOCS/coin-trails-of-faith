
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

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
                <p className="mb-4">
                  The Cross Denier was one of the most iconic coins of the Crusader states, featuring a 
                  prominent cross design that symbolized Christian rule in Jerusalem.
                </p>
                <p>
                  More detailed analysis will be provided in upcoming updates.
                </p>
              </TabsContent>
              
              <TabsContent value="antioch" className="mt-6 p-4 bg-parchment rounded-md">
                <h2 className="text-2xl font-medieval mb-4">Denier of Bohemond III (Antioch)</h2>
                <p className="mb-4">
                  Bohemond III's coins reflected the unique political position of the Principality of Antioch,
                  showing both Byzantine and Western European influences.
                </p>
                <p>
                  More detailed analysis will be provided in upcoming updates.
                </p>
              </TabsContent>
              
              <TabsContent value="constantinople" className="mt-6 p-4 bg-parchment rounded-md">
                <h2 className="text-2xl font-medieval mb-4">Coins of the Latin Kingdom of Constantinople</h2>
                <p className="mb-4">
                  Following the Fourth Crusade's conquest of Constantinople in 1204, Latin rulers issued coins
                  that blended Western European and Byzantine traditions.
                </p>
                <p>
                  More detailed analysis will be provided in upcoming updates.
                </p>
              </TabsContent>
              
              <TabsContent value="richard" className="mt-6 p-4 bg-parchment rounded-md">
                <h2 className="text-2xl font-medieval mb-4">Coin of Richard I (the Lionheart)</h2>
                <p className="mb-4">
                  Though Richard I spent little time in the Holy Land, his coinage reflected his status as a
                  crusader king and his financial contributions to the Third Crusade.
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

export default ChristianCoins;
