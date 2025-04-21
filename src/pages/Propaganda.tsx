
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const Propaganda = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-medieval text-center mb-8">Propaganda in Coins</h1>
          
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm shadow-lg rounded-lg p-6">
            <p className="mb-6 text-lg">
              Coins during the Crusades era were not merely economic tools but powerful vehicles for 
              propaganda, conveying religious, political, and cultural messages to diverse audiences.
            </p>
            
            <Tabs defaultValue="cross" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <TabsTrigger value="cross">Cross Symbolism</TabsTrigger>
                <TabsTrigger value="jerusalem">Jerusalem Conquest</TabsTrigger>
                <TabsTrigger value="islamic">Islamic Messaging</TabsTrigger>
                <TabsTrigger value="legitimacy">Claims of Legitimacy</TabsTrigger>
              </TabsList>
              
              <TabsContent value="cross" className="mt-6 p-4 bg-parchment rounded-md">
                <h2 className="text-2xl font-medieval mb-4">Cross Symbolism in Crusader Coins</h2>
                <p className="mb-4">
                  The prominent display of crosses on Crusader coinage served as a powerful statement of 
                  Christian identity and the religious mission of the Crusader states in the Holy Land.
                </p>
                <p>
                  More detailed analysis will be provided in upcoming updates.
                </p>
              </TabsContent>
              
              <TabsContent value="jerusalem" className="mt-6 p-4 bg-parchment rounded-md">
                <h2 className="text-2xl font-medieval mb-4">Commemorating Jerusalem's Conquest</h2>
                <p className="mb-4">
                  Coins minted after the capture of Jerusalem in 1099 often celebrated this achievement, 
                  emphasizing the religious significance of controlling the Holy City.
                </p>
                <p>
                  More detailed analysis will be provided in upcoming updates.
                </p>
              </TabsContent>
              
              <TabsContent value="islamic" className="mt-6 p-4 bg-parchment rounded-md">
                <h2 className="text-2xl font-medieval mb-4">Islamic Counter-Propaganda</h2>
                <p className="mb-4">
                  Muslim rulers like Saladin used coinage to promote their legitimacy and religious authority, 
                  especially after recapturing territories from Crusader control.
                </p>
                <p>
                  More detailed analysis will be provided in upcoming updates.
                </p>
              </TabsContent>
              
              <TabsContent value="legitimacy" className="mt-6 p-4 bg-parchment rounded-md">
                <h2 className="text-2xl font-medieval mb-4">Contested Claims of Legitimacy</h2>
                <p className="mb-4">
                  Both Christian and Muslim rulers used coin inscriptions and imagery to assert their 
                  rightful claim to contested territories, particularly Jerusalem.
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

export default Propaganda;
