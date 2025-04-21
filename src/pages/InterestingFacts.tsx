
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
              The study of Crusader-era coins reveals fascinating and often surprising insights into 
              medieval economy, politics, culture, and daily life.
            </p>
            
            <Tabs defaultValue="multilingual" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <TabsTrigger value="multilingual">Multilingual Coins</TabsTrigger>
                <TabsTrigger value="counterfeits">Medieval Counterfeiting</TabsTrigger>
                <TabsTrigger value="women">Women on Coins</TabsTrigger>
                <TabsTrigger value="technology">Minting Technology</TabsTrigger>
              </TabsList>
              
              <TabsContent value="multilingual" className="mt-6 p-4 bg-parchment rounded-md">
                <h2 className="text-2xl font-medieval mb-4">Multilingual Coinage</h2>
                <p className="mb-4">
                  Some Crusader-era coins featured inscriptions in multiple languages, reflecting the 
                  cultural diversity and practical realities of Mediterranean societies.
                </p>
                <p>
                  The Norman kings of Sicily issued coins with inscriptions in Arabic, Greek, and Latin, 
                  reflecting the island's multicultural population and complex political identity.
                </p>
              </TabsContent>
              
              <TabsContent value="counterfeits" className="mt-6 p-4 bg-parchment rounded-md">
                <h2 className="text-2xl font-medieval mb-4">Medieval Counterfeiting</h2>
                <p className="mb-4">
                  Counterfeit coins were a significant issue during the Crusades era, with various 
                  methods used to create fake currency or debase official coinage.
                </p>
                <p>
                  Some medieval counterfeiters would create copper cores and coat them with gold 
                  or silver, a practice called "fourrée" that required sophisticated techniques.
                </p>
              </TabsContent>
              
              <TabsContent value="women" className="mt-6 p-4 bg-parchment rounded-md">
                <h2 className="text-2xl font-medieval mb-4">Women on Crusader Coins</h2>
                <p className="mb-4">
                  Several powerful women appeared on coinage during the Crusades era, reflecting their 
                  important political roles in both Christian and Muslim societies.
                </p>
                <p>
                  Queen Melisende of Jerusalem (ruled 1131-1153) was one of the few female rulers whose 
                  name appeared on Crusader coinage, signifying her legitimate authority.
                </p>
              </TabsContent>
              
              <TabsContent value="technology" className="mt-6 p-4 bg-parchment rounded-md">
                <h2 className="text-2xl font-medieval mb-4">Minting Technology</h2>
                <p className="mb-4">
                  The Crusades era saw important developments in coin minting technology, with cross-cultural 
                  exchange of techniques between European and Islamic societies.
                </p>
                <p>
                  While European mints typically used hammered techniques for coinage, some Islamic mints 
                  had developed more advanced methods for ensuring consistent weight and purity.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default InterestingFacts;
