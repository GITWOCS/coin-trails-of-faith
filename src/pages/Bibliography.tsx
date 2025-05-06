
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

const Bibliography = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-medieval text-center mb-8">Bibliography</h1>
          
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-medieval mb-4">Essential Reading on Medieval Numismatics</h2>
            
            <div className="space-y-6">
              <div className="border-b pb-4">
                <h3 className="text-xl mb-2">General Works</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <p className="font-semibold">Grierson, Philip. (1975). <em>Numismatics.</em> Oxford: Oxford University Press.</p>
                    <p className="text-sm text-gray-600">The definitive introduction to the study of coins and their history.</p>
                  </li>
                  <li>
                    <p className="font-semibold">Metcalf, D.M. (1995). <em>Coinage of the Crusades and the Latin East.</em> London: Royal Numismatic Society.</p>
                    <p className="text-sm text-gray-600">The seminal work on Crusader coinage, with detailed catalogs and historical context.</p>
                  </li>
                  <li>
                    <p className="font-semibold">Balog, Paul. (1964). <em>The Coinage of the Mamluk Sultans of Egypt and Syria.</em> New York: American Numismatic Society.</p>
                    <p className="text-sm text-gray-600">Comprehensive study of Mamluk coinage during and after the Crusades.</p>
                  </li>
                </ul>
              </div>
              
              <div className="border-b pb-4">
                <h3 className="text-xl mb-2">Islamic Coinage</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <p className="font-semibold">Album, Stephen. (2011). <em>Checklist of Islamic Coins.</em> 3rd ed. Santa Rosa: Stephen Album Rare Coins.</p>
                    <p className="text-sm text-gray-600">A practical reference guide to Islamic coins with detailed typologies.</p>
                  </li>
                  <li>
                    <p className="font-semibold">Heidemann, Stefan. (2009). <em>Economic Growth and Currency in Ayyubid Palestine.</em> Leiden: Brill.</p>
                    <p className="text-sm text-gray-600">Detailed analysis of monetary policies under Saladin and his successors.</p>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl mb-2">Academic Journals</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <p className="font-semibold">Numismatic Chronicle</p>
                    <p className="text-sm text-gray-600">Published by the Royal Numismatic Society since 1838.</p>
                  </li>
                  <li>
                    <p className="font-semibold">American Journal of Numismatics</p>
                    <p className="text-sm text-gray-600">Published by the American Numismatic Society.</p>
                  </li>
                  <li>
                    <p className="font-semibold">Journal of the Oriental Numismatic Society</p>
                    <p className="text-sm text-gray-600">Specialized in Eastern coin traditions including Islamic coinage.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Bibliography;
