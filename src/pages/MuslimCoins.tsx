import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import InteractiveCoinRow from "@/components/home/InteractiveCoinRow";
import CoinTabsDetail from "@/components/coin/CoinTabsDetail";

const featuredMuslimCoins = [
  {
    id: "fatimid-dinar",
    name: "Fatimid Dinar",
    image: "/placeholder.svg",
    era: "10th-12th Century",
    material: "Gold",
    origin: "Fatimid Caliphate",
    type: "gold" as const,
  },
  {
    id: "ayyubid-dinar",
    name: "Ayyubid Dinar",
    image: "/placeholder.svg",
    era: "12th-13th Century",
    material: "Gold",
    origin: "Ayyubid Dynasty",
    type: "gold" as const,
  },
  {
    id: "umayyad-dinar",
    name: "Umayyad Dinar",
    image: "/placeholder.svg",
    era: "7th-8th Century",
    material: "Gold",
    origin: "Umayyad Caliphate",
    type: "gold" as const,
  },
  {
    id: "mamluk-dirham",
    name: "Mamluk Dirham",
    image: "/placeholder.svg",
    era: "13th-16th Century",
    material: "Silver",
    origin: "Mamluk Sultanate",
    type: "silver" as const,
  },
];

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

          {/* Featured Coins Interactive Row */}
          <div className="mb-10">
            <h2 className="text-2xl font-medieval text-center mb-2">Featured Coins</h2>
            <p className="text-center mb-4 text-gray-700">
              Hover to pause—click any coin to see both sides and a full analysis!
            </p>
            <InteractiveCoinRow coins={featuredMuslimCoins} direction="left" speed={18} />
          </div>

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
                <CoinTabsDetail
                  context={`The Fatimid Caliphate, a Shi’a Islamic dynasty, emerged in 909 CE and by the 11th century had become a dominant force across North Africa and the Levant. Cairo, under Fatimid control, rivaled Baghdad as a political and cultural capital. By the time the First Crusade began in 1095, the Fatimids were well-established rulers with expansive influence and deep economic ties throughout the Mediterranean.

The Fatimid gold dinar became one of the most respected and trusted coins in the Islamic world and beyond. Its gold purity, weight consistency, and widespread acceptance made it a cornerstone of pre-modern global trade. During the Crusades, these dinars circulated not only in Muslim cities but in Crusader territories, often preferred over local coinage. Their reputation made them a unifying currency in a deeply divided world.`}
                  religion={`The Fatimid dinar rejects figural imagery entirely, favoring beautifully inscribed Arabic calligraphy. These inscriptions weren’t decorative—they were declarations. Qur’anic verses and the Shahada (“There is no god but God, and Muhammad is the messenger of God”) affirmed the coin’s role as a vehicle of divine truth, transforming money into a medium of faith.

The absence of images aligns with Islamic theological principles, especially within Shi’a traditions, which emphasized the authority of the Imam-Caliph. These coins not only represented wealth but served as pocket-sized statements of spiritual and political identity.`}
                  political={`Fatimid dinars functioned as tools of statecraft. Their inscriptions proclaimed the caliph’s legitimacy, often including titles such as “Commander of the Faithful” or “God’s Representative on Earth.” In doing so, the coin operated like a broadcast, delivering a message of sovereign rule with every transaction.

Perhaps most interesting is how these coins traveled across religious and political lines. Crusader rulers—despite warring with Islamic powers—accepted Fatimid dinars in their markets. Some Christian states even minted imitations of these dinars, maintaining the Arabic script and religious content for the sake of commercial trust. That’s how powerful these coins were: they overrode ideology in favor of functionality.`}
                  insight={`The Fatimid dinar isn’t just an artifact—it’s a contradiction pressed in gold. It is at once sacred and secular, religious and economic, sectarian and universal. Its design, intentionally minimalist, makes its message more potent. Where Christian coins bore kings, saints, and crosses, the Fatimid dinar bore only words, but those words carried entire systems of belief and political vision.

In the Crusader context, this coin embodies the paradoxes of the medieval Mediterranean. A Shi’a Islamic coin, used by Christian rulers, copied by Crusader mints, and trusted across enemy lines. Its acceptance by so many different peoples tells us that money, in its purest form, reveals what a society values most—and in this case, it was purity, trust, and divine legitimacy.`}
                />
              </TabsContent>
              
              <TabsContent value="ayyubid" className="mt-6 p-4 bg-parchment rounded-md">
                <h2 className="text-2xl font-medieval mb-4">Ayyubid Dinar (Saladin)</h2>
                <CoinTabsDetail
                  context="More detailed analysis will be provided in upcoming updates."
                  religion=""
                  political=""
                  insight=""
                />
              </TabsContent>
              
              <TabsContent value="umayyad" className="mt-6 p-4 bg-parchment rounded-md">
                <h2 className="text-2xl font-medieval mb-4">Umayyad Dinar</h2>
                <CoinTabsDetail
                  context="More detailed analysis will be provided in upcoming updates."
                  religion=""
                  political=""
                  insight=""
                />
              </TabsContent>
              
              <TabsContent value="mamluk" className="mt-6 p-4 bg-parchment rounded-md">
                <h2 className="text-2xl font-medieval mb-4">Mamluk Dirham</h2>
                <CoinTabsDetail
                  context="More detailed analysis will be provided in upcoming updates."
                  religion=""
                  political=""
                  insight=""
                />
              </TabsContent>
            </Tabs>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default MuslimCoins;
