
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import CoinCard from "@/components/coin/CoinCard";
import CoinTabsDetail from "@/components/coin/CoinTabsDetail";

const featuredMuslimCoins = [
  {
    id: "umayyad-dinar",
    name: "Umayyad Dinar",
    image: "./src/images/u_front.png",
    backImage: "./src/images/u_back.png",
    era: "7th-8th Century",
    material: "Gold",
    origin: "Umayyad Caliphate",
    type: "gold" as const,
  },
  {
    id: "mamluk-dirham",
    name: "Mamluk Dirham",
    image: "/lovable-uploads/f6757583-aaa1-4372-8bba-5246d6ecffee.png",
    backImage: "/lovable-uploads/b9deed32-2868-47aa-8b3a-156b1aead5f7.png",
    era: "13th-16th Century",
    material: "Silver",
    origin: "Mamluk Sultanate",
    type: "silver" as const,
  },
  {
    id: "ayyubid-dinar",
    name: "Ayyubid Dinar",
    image: "/lovable-uploads/e1d6158d-c2b0-44fe-80f1-ddcec0bb54a8.png",
    backImage: "/lovable-uploads/7eb0d385-0728-42a3-b04f-dcd9c9f098e1.png",
    era: "12th-13th Century",
    material: "Gold",
    origin: "Ayyubid Dynasty",
    type: "gold" as const,
  },
  {
    id: "fatimid-dinar",
    name: "Fatimid Dinar",
    image: "/lovable-uploads/e971a400-9a65-4f8b-82d5-ce28d82131a0.png",
    backImage: "/lovable-uploads/c50e27d8-2e9a-4fdd-9ac9-7f2dc6e0c56f.png",
    era: "10th-12th Century",
    material: "Gold",
    origin: "Fatimid Caliphate",
    type: "gold" as const,
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

          {/* Featured Coins */}
          <div className="mb-10">
            <h2 className="text-2xl font-medieval text-center mb-6">Featured Coins</h2>
            <p className="text-center mb-6 text-gray-700">
              Click on any coin to see its reverse side.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
              {featuredMuslimCoins.map((coin) => (
                <CoinCard
                  key={coin.id}
                  name={coin.name}
                  image={coin.image}
                  backImage={coin.backImage}
                  era={coin.era}
                  material={coin.material}
                  origin={coin.origin}
                  type={coin.type}
                  className="w-48 h-48 mx-auto"
                />
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm shadow-lg rounded-lg p-6">
            <p className="mb-6 text-lg">
              Muslim coins during the Crusades era represent the sophisticated monetary systems of Islamic 
              dynasties that confronted and coexisted with the Crusader states. These coins showcase exquisite 
              calligraphy, innovative minting techniques, and important historical context.
            </p>
            
            <Tabs defaultValue="umayyad" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <TabsTrigger value="umayyad">Umayyad Dinar</TabsTrigger>
                <TabsTrigger value="mamluk">Mamluk Dirham</TabsTrigger>
                <TabsTrigger value="ayyubid">Ayyubid Dinar</TabsTrigger>
                <TabsTrigger value="fatimid">Fatimid Dinar</TabsTrigger>
              </TabsList>
              
              <TabsContent value="umayyad" className="mt-6 p-4 bg-parchment rounded-md">
                <h2 className="text-2xl font-medieval mb-4">Umayyad Dinar</h2>
                <CoinTabsDetail
                  context={`The Umayyad dinar was introduced under the caliphate of ʿAbd al-Malik ibn Marwān, during a time when the Islamic empire was consolidating its power across a vast and newly conquered territory that stretched from Spain to Persia. Prior to the reforms that led to the creation of this dinar, the early Islamic world continued to use Byzantine and Sasanian coins, sometimes overstruck with Arabic inscriptions, but still bearing Christian iconography or Zoroastrian symbols.

This changed dramatically in 696–697 CE when ʿAbd al-Malik introduced a fully Islamic coinage, breaking decisively with the imagery of previous empires. The new gold dinars featured only Arabic text, primarily Qur'anic verses and religious declarations, ushering in a radical new form of currency: one that reflected the monotheism and aniconism of Islam. This was a coin that didn't just represent wealth—it represented the Islamic state itself.`}
                  religion={`The Umayyad dinar is arguably the most theologically rich coin ever minted. Its inscriptions include the Shahada, the Muslim declaration of faith: "I bear witness that there is no god worthy of worship except Allah, and I bear witness that Muhammad is His final prophet and messenger." It also features the Basmala—"In the name of God, the Most Gracious, the Most Merciful"—and verses from Surah Al-Ikhlas, a powerful affirmation of monotheism: "Say: He is Allah, the One; Allah, the Eternal Refuge. He neither begets nor is born, nor is there to Him any equivalent." These verses serve not only as a declaration of Islamic belief but also as a direct theological response to Christian doctrines, particularly the belief in Jesus as the son of God and part of the divine Trinity. In this way, the coin becomes a circulating statement of Islamic identity and doctrinal clarity. This coin was a portable act of worship, not in the sense of ritual, but in how it reaffirmed the central tenets of Islam every time it changed hands. By rejecting figural imagery and relying solely on sacred text, it made a powerful theological statement: only God is worthy of representation, and His word is enough.`}
                  political={`The minting of the Umayyad dinar was not just religious—it was a profoundly political act. By replacing Byzantine-style coins with Islamic ones, ʿAbd al-Malik was asserting the independence and maturity of the Islamic state. This wasn't a caliphate borrowing from Rome—it was now its own imperial force, with a visual language grounded in its own faith. In fact, the move was so significant that it reportedly caused tension with the Byzantine emperor, who saw it as a cultural break and challenge to his influence. It was, in every way, a coin of self-definition—a gold standard for what Islamic governance and sovereignty looked like. During the Crusades, centuries later, this coin's influence was still being felt. Its design became the model for Islamic coinage across dynasties. Even Crusader imitations—like those minted in the Kingdom of Jerusalem—borrowed their text-only aesthetic, even if they didn't fully understand the meaning of the inscriptions. In this way, the Umayyad dinar's legacy stretched far beyond its original minting, shaping what a "trusted" Islamic coin looked like, even in the eyes of its enemies.`}
                  insight={`The Umayyad dinar was a game-changer. In a world where coins traditionally bore the face of a king, emperor, or deity, this coin erased the human and exalted the divine. It was the embodiment of Islamic aniconism, but also of ideological innovation, turning the coin into a discursive space, a place to proclaim identity, faith, and sovereignty. Its influence wasn't just limited to the Islamic world. The fact that Crusader rulers later imitated Islamic dinars, favoring Arabic script and calligraphic design over Western imagery, reveals the deep respect these coins commanded. Even in the hands of the Crusaders, this was the coin to copy—for its clarity, beauty, and above all, the trust it generated in markets from Damascus to Jerusalem to Cairo. It's no exaggeration to say that the Umayyad dinar didn't just finance an empire—it defined what the Islamic empire looked like in gold.`}
                />
              </TabsContent>
              
              <TabsContent value="mamluk" className="mt-6 p-4 bg-parchment rounded-md">
                <h2 className="text-2xl font-medieval mb-4">Mamluk Dirham</h2>
                <CoinTabsDetail
                  context={`The Mamluk Sultanate was founded in 1250 CE in Egypt and quickly expanded into Syria and beyond. It rose in the immediate aftermath of the Crusader era, establishing itself as the dominant Islamic power in the region. The Mamluks famously defeated the Mongols at Ain Jalut in 1260 and expelled the last Crusader strongholds by 1291.

This context is crucial to understanding the Mamluk dinar. Unlike earlier Islamic coins minted during periods of conquest or fragmentation, the Mamluk dinar was minted during a time of consolidation and control. It reflects the confidence of an empire that had reclaimed Jerusalem, stabilized trade, and positioned itself as the guardian of the Islamic holy cities and the custodian of Sunni orthodoxy.`}
                  religion={`True to Islamic numismatic tradition, Mamluk dinars featured no figural imagery, focusing instead on religious and honorific inscriptions. These included the Shahada, Qur'anic verses, and religious titles such as "al-Sultan al-Malik al-Nasir" (The Victorious King). Many coins also referenced the Abbasid caliph, who had been re-established in Cairo under Mamluk protection after the Mongol destruction of Baghdad in 1258.

This arrangement was politically convenient in that the caliph held symbolic religious authority, while the Mamluk sultans exercised real power. By including both names, the coin reinforced a theological and political order in which the Mamluks portrayed themselves as the rightful defenders of Islam, unifiers after chaos, and successors to the lost eastern caliphate.`}
                  political={`Mamluk dinars are coins of power projected inward, not outward. Where Crusader coins were often performative, stamped with crosses to declare Christian conquest, Mamluk dinars were assurances of continuity. They emphasized control, structure, and orthodoxy.

By naming the reigning sultan and often the city of minting (Cairo, Damascus, Aleppo), these coins marked territorial sovereignty. But even more importantly, they reminded the public of who was responsible for order, security, and piety in the post-Crusade Islamic world. Every time one changed hands, it said: You live in a realm governed by a ruler who serves God and upholds justice.

These dinars were used to pay soldiers, fund the construction of mosques and madrasas (schools), and facilitate pilgrimage to Mecca. Their reach wasn't just monetary, but it was ideological. They were part of the broader Mamluk strategy of cultivating urban Islamic culture, Sunni scholarship, and religious legitimacy.`}
                  insight={`Where earlier Islamic coins often represented aspiration or competition, the Mamluk dinar represents consolidation. It's not trying to define Islamic power, but it's asserting that Islamic power has been restored and stabilized. The coin's inscriptions, rich in religious and honorific language, speak to an empire that has nothing to prove but everything to protect. By this point, Crusader states were gone, Mongol threats had been checked, and Cairo was a hub of scholarship and trade. The Mamluk dinar wasn't propaganda. It was confirmation.`}
                />
              </TabsContent>
              
              <TabsContent value="ayyubid" className="mt-6 p-4 bg-parchment rounded-md">
                <h2 className="text-2xl font-medieval mb-4">Ayyubid Dinar (Saladin)</h2>
                <CoinTabsDetail
                  context={`The Ayyubid dinar rose to prominence during a turning point in Crusader history: the recapture of Jerusalem in 1187 CE by Salah ad-Din Yusuf ibn Ayyub, better known in the West as Saladin. After nearly 90 years of Latin Christian rule in the city, Saladin's victory marked not only a military achievement but a restoration of Islamic sovereignty over one of Islam's holiest sites. In the aftermath of this victory, Saladin began minting dinars in Jerusalem. This was a powerful gesture signaling that the city was no longer under Latin Christian control. These coins were not just for commerce; they were part of a broader campaign to reclaim the Holy Land ideologically and spiritually. To mint a coin in Jerusalem was to declare, "This land belongs again to God and the Ummah."`}
                  religion={`Like other Islamic coins of the time, the Ayyubid dinar avoided figural imagery and instead featured beautifully inscribed Arabic script, often quoting from the Qur'an or praising the ruler's divine authority. Saladin's dinars regularly included titles like "al-Malik al-Nasir" (The Victorious King) and sometimes featured the Basmala ("In the name of God, the Most Gracious, the Most Merciful"). These inscriptions were not neutral but were acts of devotion and religious assertion. By circulating coins that reaffirmed God's greatness and the sultan's pious legitimacy, the Ayyubid dynasty was embedding Islamic authority into everyday life, one transaction at a time.`}
                  political={`The decision to mint coins in newly reclaimed cities, especially Jerusalem, was no small matter. It was a deliberate political act, a signal to both Muslim subjects and Christian enemies that Islamic rule had been restored. These dinars were part of a broader strategy of Islamic state-building, in which governance was legitimized not just through military conquest, but through economic control and religious symbolism. Moreover, the coins tied Saladin's legitimacy to that of the Abbasid caliphate, which still held symbolic spiritual authority in Baghdad. By including the name of the caliph on the coin alongside his own, Saladin positioned himself as a defender and extension of the broader Islamic world, not a regional warlord. This dual recognition helped him consolidate power and unify diverse territories under the Ayyubid banner.`}
                  insight={`The Ayyubid dinar is not just a coin—it is a restoration, a message, and a claim pressed into gold. It reflects a moment in history when faith, power, and economy converged. After decades of Crusader presence, the Islamic mint in Jerusalem wasn't merely reopening, it was reclaiming sacred geography and inscribing a new narrative. Its inscriptions remind us that coins can be monuments in motion. While Crusader coins often shouted Christian imagery in Muslim-majority regions, the Ayyubid dinar used linguistic elegance and theological assertion to reinforce legitimacy, confidence, and moral clarity. Even in an age of war, it was a coin of consolidation, not reaction. The fact that these coins circulated in both Muslim and Crusader zones, even found in Crusader hoards, shows that their material and monetary value transcended borders. But for those who could read the inscriptions, the message was unmistakable: God has returned to Jerusalem, and so has justice.`}
                />
              </TabsContent>
              
              <TabsContent value="fatimid" className="mt-6 p-4 bg-parchment rounded-md">
                <h2 className="text-2xl font-medieval mb-4">Fatimid Dinar</h2>
                <CoinTabsDetail
                  context={`The Fatimid Caliphate, a Shi'a Islamic dynasty, emerged in 909 CE and by the 11th century had become a dominant force across North Africa and the Levant. Cairo, under Fatimid control, rivaled Baghdad as a political and cultural capital. By the time the First Crusade began in 1095, the Fatimids were well-established rulers with expansive influence and deep economic ties throughout the Mediterranean.

The Fatimid gold dinar became one of the most respected and trusted coins in the Islamic world and beyond. Its gold purity, weight consistency, and widespread acceptance made it a cornerstone of pre-modern global trade. During the Crusades, these dinars circulated not only in Muslim cities but in Crusader territories, often preferred over local coinage. Their reputation made them a unifying currency in a deeply divided world.`}
                  religion={`The Fatimid dinar rejects figural imagery entirely, favoring beautifully inscribed Arabic calligraphy. These inscriptions weren't decorative—they were declarations. Qur'anic verses and the Shahada ("There is no god but God, and Muhammad is the messenger of God") affirmed the coin's role as a vehicle of divine truth, transforming money into a medium of faith.

The absence of images aligns with Islamic theological principles, especially within Shi'a traditions, which emphasized the authority of the Imam-Caliph. These coins not only represented wealth but served as pocket-sized statements of spiritual and political identity.`}
                  political={`Fatimid dinars function as tools of statecraft. Their inscriptions proclaimed the caliph's legitimacy, often including titles such as "Commander of the Faithful" or "God's Representative on Earth." In doing so, the coin operated like a broadcast, delivering a message of sovereign rule with every transaction.

Perhaps most interesting is how these coins traveled across religious and political lines. Crusader rulers—despite warring with Islamic powers—accepted Fatimid dinars in their markets. Some Christian states even minted imitations of these dinars, maintaining the Arabic script and religious content for the sake of commercial trust. That's how powerful these coins were: they overrode ideology in favor of functionality.`}
                  insight={`The Fatimid dinar isn't just an artifact—it's a contradiction pressed in gold. It is at once sacred and secular, religious and economic, sectarian and universal. Its design, intentionally minimalist, makes its message more potent. Where Christian coins bore kings, saints, and crosses, the Fatimid dinar bore only words, but those words carried entire systems of belief and political vision.

In the Crusader context, this coin embodies the paradoxes of the medieval Mediterranean. A Shi'a Islamic coin, used by Christian rulers, copied by Crusader mints, and trusted across enemy lines. Its acceptance by so many different peoples tells us that money, in its purest form, reveals what a society values most—and in this case, it was purity, trust, and divine legitimacy.`}
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
