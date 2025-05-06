
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

const Research = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-medieval text-center mb-8">Academic Research</h1>
          
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm shadow-lg rounded-lg p-6">
            <p className="mb-6 text-lg">
              Current academic research on Crusader-era coinage spans multiple disciplines, including history, archaeology, economics, and religious studies. Below are some of the latest research topics and contributing scholars.
            </p>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-medieval mb-4">Current Research Topics</h2>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <p className="font-semibold">Circulation Patterns of Mixed Coinage in the Crusader States</p>
                    <p className="text-sm text-gray-600">Analyzing how Christian and Muslim coins circulated within the same markets, and what this reveals about cross-cultural economic relations.</p>
                  </li>
                  <li>
                    <p className="font-semibold">Numismatic Evidence of Cultural Adaptation in the Levant</p>
                    <p className="text-sm text-gray-600">Exploring how coin iconography evolved to accommodate diverse religious and cultural sensibilities.</p>
                  </li>
                  <li>
                    <p className="font-semibold">Metallurgic Analysis of Crusader Coins</p>
                    <p className="text-sm text-gray-600">Using modern scientific methods to determine metal composition, minting techniques, and authenticity of medieval coins.</p>
                  </li>
                  <li>
                    <p className="font-semibold">Economic Impact of the Military Orders' Financial Systems</p>
                    <p className="text-sm text-gray-600">Investigating how organizations like the Knights Templar influenced currency exchange and banking in the medieval Mediterranean.</p>
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-medieval mb-4">Recent Academic Conferences</h2>
                <div className="space-y-4">
                  <div className="bg-parchment p-4 rounded-md">
                    <h3 className="font-semibold">International Numismatic Congress 2024</h3>
                    <p>Warsaw, Poland</p>
                    <p className="text-sm text-gray-600">Featured a special panel on "Monetary Exchanges Between East and West During the Crusades"</p>
                  </div>
                  <div className="bg-parchment p-4 rounded-md">
                    <h3 className="font-semibold">Society for the Study of the Crusades and the Latin East</h3>
                    <p>Biennial Conference, 2023, Barcelona</p>
                    <p className="text-sm text-gray-600">Session on "Economic Infrastructure of the Crusader States" with multiple papers on coinage.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-medieval mb-4">Leading Scholars</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-md shadow-sm">
                    <h3 className="font-semibold">Dr. Julian Baker</h3>
                    <p className="text-sm italic mb-2">Ashmolean Museum, University of Oxford</p>
                    <p className="text-sm text-gray-600">Specializes in Byzantine and Crusader numismatics, focusing on the economies of the eastern Mediterranean in the 12th-15th centuries.</p>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow-sm">
                    <h3 className="font-semibold">Prof. Lutz Ilisch</h3>
                    <p className="text-sm italic mb-2">University of Tübingen</p>
                    <p className="text-sm text-gray-600">Expert in Islamic numismatics, particularly Ayyubid and Mamluk coins and their relationships with Crusader issues.</p>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow-sm">
                    <h3 className="font-semibold">Dr. Robert Kool</h3>
                    <p className="text-sm italic mb-2">Israel Antiquities Authority</p>
                    <p className="text-sm text-gray-600">Research expertise in Crusader-period coin finds from archaeological contexts in the Holy Land.</p>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow-sm">
                    <h3 className="font-semibold">Prof. Helen Brown</h3>
                    <p className="text-sm italic mb-2">University of Edinburgh</p>
                    <p className="text-sm text-gray-600">Researches economic networks in the medieval Mediterranean through numismatic evidence.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Research;
