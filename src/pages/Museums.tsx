
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Museums = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-medieval text-center mb-8">Museums & Collections</h1>
          
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm shadow-lg rounded-lg p-6">
            <p className="mb-6 text-lg">
              Explore the world's foremost collections of medieval and crusader-era coins. These institutions house some of the most significant numismatic artifacts from this fascinating period.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-parchment p-4 rounded-lg">
                <h2 className="text-2xl font-medieval mb-3">British Museum</h2>
                <p className="mb-2">London, United Kingdom</p>
                <p className="mb-4">
                  Home to one of the world's largest numismatic collections, including significant holdings of Crusader and Islamic coins from the medieval period.
                </p>
                <a href="https://www.britishmuseum.org/collection/coins-and-medals" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Visit Website</a>
              </div>
              
              <div className="bg-parchment p-4 rounded-lg">
                <h2 className="text-2xl font-medieval mb-3">American Numismatic Society</h2>
                <p className="mb-2">New York, USA</p>
                <p className="mb-4">
                  Features extensive collections of Islamic and Crusader coinage, including important Fatimid, Ayyubid, and Latin Kingdom of Jerusalem specimens.
                </p>
                <a href="https://numismatics.org/collection/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Visit Website</a>
              </div>
              
              <div className="bg-parchment p-4 rounded-lg">
                <h2 className="text-2xl font-medieval mb-3">Israel Museum</h2>
                <p className="mb-2">Jerusalem, Israel</p>
                <p className="mb-4">
                  Houses the National Treasures collection with significant findings of Crusader coins discovered in archaeological excavations throughout the Holy Land.
                </p>
                <a href="https://www.imj.org.il/en/wings/archaeology/numismatics" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Visit Website</a>
              </div>
              
              <div className="bg-parchment p-4 rounded-lg">
                <h2 className="text-2xl font-medieval mb-3">Bibliothèque nationale de France</h2>
                <p className="mb-2">Paris, France</p>
                <p className="mb-4">
                  The Cabinet des Médailles holds an exceptional collection of medieval French and Crusader coins, including rare specimens from the Principality of Antioch.
                </p>
                <a href="https://www.bnf.fr/fr/departement-des-monnaies-medailles-et-antiques" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Visit Website</a>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-300">
              <h3 className="text-xl font-medieval mb-4">Virtual Collections & Digital Archives</h3>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <a href="https://ikmk.smb.museum/home" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Interactive Catalogue of the Münzkabinett Berlin</a>
                  <p className="text-sm">Extensive digital collection with high-resolution images and detailed information.</p>
                </li>
                <li>
                  <a href="https://www.moneymuseum.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Sunflower Foundation Money Museum</a>
                  <p className="text-sm">Digital archive focusing on the cultural history of money, including medieval coinage.</p>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Museums;
