
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-ancient-map bg-cover bg-center opacity-30 z-0" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-10" />

      <div className="container mx-auto px-4 relative z-20 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-medieval text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Crusader Coins
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Exploring the numismatic legacy of the Crusades and the cultural
          exchange between Christian and Muslim civilizations
        </motion.p>

        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#explore"
            className="bg-gold hover:bg-gold-dark text-black font-medium py-3 px-6 rounded-md transition-colors"
          >
            Explore Coins
          </a>
          
          <a
            href="#learn"
            className="bg-white/20 hover:bg-white/30 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            Learn More
          </a>
        </motion.div>

        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </motion.div>
      </div>

      <div className="absolute -bottom-16 left-0 right-0 h-32 bg-gradient-to-t from-parchment to-transparent z-20" />
    </section>
  );
};

export default Hero;
