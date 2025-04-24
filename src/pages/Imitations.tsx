import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import CoinTabsDetail from "@/components/coin/CoinTabsDetail";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";

const coinData = [
  {
    title: "Imitation Fatimid Dinar",
    image: "/lovable-uploads/e06cf278-8959-40b4-b6b9-faec8e53d3c3.png",
    description: "The only difference between a Fatimid dinar and its crusader copy is the quality of the inscriptions: the Arabic calligraphy on Fatimid coins is precise, proportional, and highly legible, while the inscriptions on the crusader copies are slightly less so. The decision by Crusader rulers to imitate Fatimid dinars was not made lightly. It was a bold, even ironic, choice: Christian leaders minting coins that preserved Islamic inscriptions, Qur'anic phrases, and the names of Muslim caliphs. But in the economic landscape of the eastern Mediterranean, trust was everything—and Fatimid dinars were among the most trusted coins in circulation.",
  },
  {
    title: "Norman Sicilian Coins",
    image: "/lovable-uploads/51ed9230-d93c-4161-8e76-b73a68d6c1c6.png",
    description: "The inclusion of Arabic on a Christian coin minted by a Catholic king was a striking choice, but in Norman Sicily, it made perfect sense. Arabic had been the language of administration, science, and commerce under Muslim rule for over a century. Retaining it on coinage signaled continuity, not rupture. It told Muslim subjects that their traditions would not be erased. It told traders across North Africa and the Levant that Sicily was still open for business.",
  },
  {
    title: "Tripoli Coins",
    image: "/lovable-uploads/3cbb512c-708b-4a2a-af20-a80ed75cddd2.png",
    description: "What makes the Tripoli coin remarkable is its visual duality. On one side, a bold Christian cross—undeniably a symbol of Crusader rule. On the other, Arabic script. Often, the Arabic inscriptions were phrases like al-Imam al-'Adil ('the just leader') or variations on caliphal titles that had long since disappeared from local rule. This wasn't sloppy minting. It was a precise decision.",
  },
  {
    title: "Crusader Kalima (Islamic Declaration of Faith) Coins",
    image: "/lovable-uploads/15e3851a-17c9-4bda-a1dd-e23bfbcdfa6a.png",
    description: "There are two main theories about the inclusion of the Kalima (Islamic declaration of faith). The more compelling theory is that this was a calculated choice. The Kalima was not just text, it was currency language in the Islamic world. Including it signaled that a coin could be trusted, even if its origins were foreign. By inscribing the Kalima, Crusader states tapped into an existing framework of legitimacy.",
  },
];

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
                {coinData.map((coin) => (
                  <TabsTrigger key={coin.title} value={coin.title.toLowerCase().replace(/\s+/g, '-')}>
                    {coin.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {coinData.map((coin) => (
                <TabsContent 
                  key={coin.title} 
                  value={coin.title.toLowerCase().replace(/\s+/g, '-')}
                  className="mt-6 space-y-4"
                >
                  <Card className="overflow-hidden">
                    <AspectRatio ratio={1}>
                      <img
                        src={coin.image}
                        alt={coin.title}
                        className="object-contain w-full h-full p-4"
                      />
                    </AspectRatio>
                  </Card>
                  <div className="bg-parchment p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-medieval mb-4">{coin.title}</h2>
                    <p className="text-lg mb-4">{coin.description}</p>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Imitations;
