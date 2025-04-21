
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const OtherCoins = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-medieval text-center mb-8">Other Coins</h1>
          
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm shadow-lg rounded-lg p-6">
            <p className="mb-6 text-lg">
              Beyond the direct Christian-Muslim conflict zones, the Crusades era saw significant 
              monetary developments in surrounding regions and cultures that were indirectly influenced by 
              or connected to the Crusader movements.
            </p>
            
            <Tabs defaultValue="norman" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <TabsTrigger value="norman">Norman Trilingual</TabsTrigger>
                <TabsTrigger value="ethiopian">Ethiopian Christian</TabsTrigger>
                <TabsTrigger value="seljuk">Seljuk Coin</TabsTrigger>
                <TabsTrigger value="genoese">Genoese Trade</TabsTrigger>
              </TabsList>
              
              <TabsContent value="norman" className="mt-6 p-4 bg-parchment rounded-md">
                <h2 className="text-2xl font-medieval mb-4">Norman Trilingual Coin</h2>
                <p className="mb-4">
                  Roger II's Norman Sicilian coins represent one of the most fascinating examples of 
                  multicultural expression in medieval numismatics, featuring text in three languages.
                </p>
                <p>
                  More detailed analysis will be provided in upcoming updates.
                </p>
              </TabsContent>
              
              <TabsContent value="ethiopian" className="mt-6 p-4 bg-parchment rounded-md">
                <h2 className="text-2xl font-medieval mb-4">Ethiopian Christian Coin</h2>
                <p className="mb-4">
                  The Christian Kingdom of Ethiopia maintained its distinctive Christian identity and coinage 
                  during the Crusades era, despite being geographically distant from the Holy Land conflicts.
                </p>
                <p>
                  More detailed analysis will be provided in upcoming updates.
                </p>
              </TabsContent>
              
              <TabsContent value="seljuk" className="mt-6 p-4 bg-parchment rounded-md">
                <h2 className="text-2xl font-medieval mb-4">Seljuk Coin (Sultanate of Rum)</h2>
                <p className="mb-4">
                  The Seljuk Turks of Rum in Anatolia developed distinctive coinage that reflected their 
                  position between the Byzantine Empire and the Crusader states.
                </p>
                <p>
                  More detailed analysis will be provided in upcoming updates.
                </p>
              </TabsContent>
              
              <TabsContent value="genoese" className="mt-6 p-4 bg-parchment rounded-md">
                <h2 className="text-2xl font-medieval mb-4">Genoese Trade Coin</h2>
                <p className="mb-4">
                  Italian maritime powers like Genoa issued coins that facilitated Mediterranean trade 
                  networks, which were crucial to sustaining the Crusader states.
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

export default OtherCoins;
