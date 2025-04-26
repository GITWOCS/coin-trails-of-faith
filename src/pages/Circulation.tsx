import { useState } from "react";
import Layout from "@/components/layout/Layout";
import CoinCard from "@/components/coin/CoinCard";
import CoinDetail from "@/components/coin/CoinDetail";
import CirculationMap from "@/components/circulation/CirculationMap";

const circulationCoins = [
  {
    id: "fatimid-dinar",
    name: "Fatimid Dinar",
    images: [
      "/lovable-uploads/1da5c6f9-3eb3-4cd4-b8fb-6f0c374c2092.png",
      "/lovable-uploads/ff541400-f9b8-4bc2-8cb9-ff68f551f380.png"
    ],
    material: "Gold",
    date: "10th-12th Century",
    origin: "Fatimid Caliphate",
    ruler: "Various Fatimid Caliphs",
    obverse: "The Fatimid dinar typically features concentric circles of Arabic inscriptions, including the Kalima (Islamic declaration of faith), the name of the ruling Fatimid caliph, and the mint location and date.",
    reverse: "Additional Islamic declarations and Shi'ite phrases that emphasize the Fatimid's Ismaili Shi'a identity, often including 'Ali wali Allah' (Ali is the friend of God).",
    history: "The Fatimid dynasty (909-1171 CE) established their caliphate first in North Africa and later expanded to Egypt, creating a powerful Shi'ite rival to the Sunni Abbasid Caliphate. Their gold dinars were minted to an exceptionally high standard and became the dominant gold currency across the Mediterranean, influencing even Christian European coinage.",
    significance: "Fatimid dinars were so widely accepted for their consistent gold content and weight that they circulated extensively through both Muslim and Christian territories. These coins facilitated vital trade networks across the Mediterranean, connecting Egypt, North Africa, the Levant, and Southern Europe. Crusader states often accepted and used these coins rather than melting them down, demonstrating their universal economic appeal despite religious differences.",
    inscriptions: {
      obverse: "بسم الله الرحمن الرحيم لا إله إلا الله محمد رسول الله",
      reverse: "علي ولي الله",
      translation: {
        obverse: "In the name of God, the Merciful, the Compassionate. There is no god but God, Muhammad is the messenger of God",
        reverse: "Ali is the friend of God"
      }
    }
  },
  {
    id: "byzantine-hyperpyron",
    name: "Byzantine Hyperpyron",
    images: [
      "/lovable-uploads/42e17fd9-82c8-4977-8636-1be2faf684fb.png",
      "/lovable-uploads/268e3a5e-20b4-48b2-aa4b-755b8abef807.png"
    ],
    material: "Gold",
    date: "11th-13th Century",
    origin: "Byzantine Empire",
    ruler: "Various Byzantine Emperors",
    obverse: "The obverse typically displays Christ Pantocrator (Christ as ruler of all) facing forward, with a nimbus (halo) around his head, holding the Gospels.",
    reverse: "The reverse shows the standing figure of the reigning Byzantine Emperor, often holding imperial regalia such as the labarum (imperial standard) and globus cruciger (orb with cross).",
    history: "The hyperpyron ('super-refined') was introduced by Emperor Alexios I Komnenos in 1092 as part of his monetary reforms. It succeeded the earlier solidus/nomisma as the standard Byzantine gold coin, though with slightly reduced gold content. It remained the empire's primary gold coin until the Fourth Crusade's sack of Constantinople in 1204 severely disrupted the Byzantine economy.",
    significance: "The Byzantine hyperpyron was a crucial international currency that facilitated trade between East and West before and during the Crusades. Despite religious differences, these coins were readily accepted throughout the Mediterranean basin and influenced the design of many Western European and Crusader coins. The hyperpyron's circulation patterns reveal the complex economic networks that existed alongside military conflicts during this period.",
    inscriptions: {
      obverse: "IC XC (Greek abbreviation for Jesus Christ)",
      reverse: "Various imperial titles in Greek",
      translation: {
        obverse: "Jesus Christ",
        reverse: "Varies by emperor, typically 'Name, in Christ, Emperor of the Romans'"
      }
    }
  },
  {
    id: "venetian-grosso",
    name: "Venetian Grosso",
    images: [
      "/lovable-uploads/527fc96a-4e74-47ee-97ef-fdce8318dda9.png",
      "/lovable-uploads/41d0b8f7-5051-45b6-803d-79571a32f028.png"
    ],
    material: "Silver",
    date: "13th Century",
    origin: "Republic of Venice",
    ruler: "Various Venetian Doges",
    obverse: "The obverse shows St. Mark, the patron saint of Venice, handing a banner to the kneeling Doge. The inscription typically names the current Doge.",
    reverse: "The reverse depicts Christ enthroned within a mandorla (almond-shaped frame), with stars in the field. The inscription reads 'TIBI LAUS ET GLORIA' (To you praise and glory).",
    history: "The grosso (or matapan) was introduced by Doge Enrico Dandolo around 1202, just before the Fourth Crusade. Its creation coincided with Venice's increasing commercial and political power in the eastern Mediterranean. The timing was not coincidental—Venice needed a high-value silver coin to finance its expanding trade networks and military ventures, including the controversial diversion of the Fourth Crusade to Constantinople.",
    significance: "The Venetian grosso became one of the most important trade coins in the eastern Mediterranean after the Fourth Crusade. As Venice established trading colonies throughout the region, their coinage facilitated commerce between East and West. The grosso's widespread circulation in both Crusader states and Muslim territories demonstrates how commercial interests often transcended religious boundaries. Archaeological finds show these coins reaching as far as the Levantine coast and Egypt, often alongside Islamic coins in the same hoards.",
    inscriptions: {
      obverse: "S. M. VENETI + [DOGE'S NAME] DVX (St. Mark of Venice + [Name] Doge)",
      reverse: "IC XC (Jesus Christ)",
      translation: {
        obverse: "Saint Mark of Venice, [Name] Doge",
        reverse: "Jesus Christ"
      }
    }
  },
  {
    id: "ayyubid-hoards",
    name: "Ayyubid Coinage from Crusader Hoards",
    images: [
      "/lovable-uploads/1ea19367-7a6e-48e1-b43f-3cc6e6572d25.png",
      "/lovable-uploads/1ea19367-7a6e-48e1-b43f-3cc6e6572d25.png"
    ],
    material: "Gold and Silver",
    date: "12th-13th Century",
    origin: "Ayyubid Sultanate",
    ruler: "Saladin and successors",
    obverse: "Ayyubid coins typically feature multiple lines of Arabic inscriptions declaring the faith and naming the ruler. Gold dinars maintain the concentric circle pattern established by earlier Islamic dynasties.",
    reverse: "The reverse contains additional religious inscriptions, the mint name, and date according to the Islamic calendar.",
    history: "The Ayyubid dynasty, founded by Saladin (Salah ad-Din), ruled Egypt, Syria, and parts of Northern Iraq and Arabia from 1171 to 1260. Saladin's recapture of Jerusalem in 1187 marked a turning point in the Crusades. The Ayyubid monetary system maintained the high standards of their Fatimid predecessors, ensuring their coins remained acceptable throughout the region.",
    significance: "Archaeological discoveries of coin hoards in former Crusader territories reveal the extensive circulation of Ayyubid coinage among Christian populations. In particular, hoards found in Acre, Caesarea, and other Crusader strongholds contain significant quantities of Ayyubid coins alongside European currencies. This physical evidence confirms contemporary accounts of the pragmatic economic relationships that existed between Crusaders and Muslims despite ongoing military conflicts. The pattern of these hoards also reveals how political events affected currency circulation, with increases in hoarding often corresponding to periods of heightened conflict.",
    inscriptions: {
      obverse: "لا إله إلا الله محمد رسول الله",
      reverse: "Varies by ruler, typically including titles and mint information",
      translation: {
        obverse: "There is no god but God, Muhammad is the messenger of God",
        reverse: "Varies by specific coin"
      }
    }
  }
];

const Circulation = () => {
  const [selectedCoin, setSelectedCoin] = useState<string | null>(null);

  const handleCoinClick = (coinId: string) => {
    setSelectedCoin(coinId);
  };

  const selectedCoinData = circulationCoins.find(coin => coin.id === selectedCoin);

  return (
    <Layout>
      <div className="page-container">
        <h1 className="section-heading">Circulation & Cross-Cultural Exchange</h1>
        
        <div className="prose max-w-none mb-12">
          <p className="lead text-xl text-center mb-8">
            During the Crusades, coins transcended borders, languages, and religions, 
            becoming universal currencies that facilitated trade and cultural exchange 
            across the Mediterranean world.
          </p>
          
          <h2 className="subsection-heading">The Mediterranean Monetary Ecosystem</h2>
          
          <p>
            The Mediterranean basin during the Crusades era functioned as an integrated economic zone 
            despite political and religious divisions. Coins minted in Cairo, Constantinople, Jerusalem, 
            and Venice circulated freely across territories controlled by different powers, creating a complex
            monetary ecosystem that reflected the region's interconnected nature.
          </p>
          
          <p>
            Archaeological evidence from coin hoards reveals the remarkably fluid nature of currency 
            circulation during this period. Crusader-era hoards typically contain a mixture of Islamic, 
            Byzantine, and European coins, demonstrating that users valued these currencies for their 
            metal content and reliability rather than their religious or political symbolism.
          </p>
          
          <CirculationMap />
          
          <h2 className="subsection-heading mt-12">Key Coins That Crossed Borders</h2>
          
          <p>
            Several coins played particularly significant roles in facilitating cross-cultural 
            exchange during the Crusades. Their widespread acceptance and circulation reveal economic 
            networks that often contradicted political and religious narratives of separation and conflict.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {circulationCoins.map((coin) => (
            <div key={coin.id} className="flex flex-col items-center">
              <CoinCard
                name={coin.name}
                image={coin.images[0]}
                era={coin.date}
                material={coin.material}
                origin={coin.origin}
                type={coin.material.toLowerCase() === "gold" ? "gold" : "silver"}
                className="w-48 h-48 mx-auto mb-4"
                onClick={() => handleCoinClick(coin.id)}
              />
              <h3 className="text-lg font-medieval text-center">{coin.name}</h3>
              <p className="text-sm text-center text-gray-600">{coin.date}</p>
            </div>
          ))}
        </div>
        
        <div className="prose max-w-none mb-16">
          <h2 className="subsection-heading">Commercial Pragmatism vs. Religious Ideology</h2>
          
          <p>
            Perhaps the most fascinating aspect of coin circulation during the Crusades was how 
            economic necessity often trumped religious prohibitions and political enmity. Despite 
            papal bulls forbidding trade with Muslims and Islamic legal opinions (fatwas) restricting 
            commerce with Christians, the archaeological record shows that coins moved freely between 
            these worlds.
          </p>
          
          <p>
            In the Crusader states, practical considerations led to the acceptance of Fatimid and 
            Ayyubid gold coins, which were often more reliable than European currencies. Similarly, 
            Venetian grossi circulated widely in Muslim-controlled territories due to their consistent 
            silver content. This pragmatic approach to money reminds us that beneath the religious 
            rhetoric of the Crusades, everyday economic interactions continued across supposed boundaries.
          </p>
          
          <h2 className="subsection-heading">Money Changers and Intermediaries</h2>
          
          <p>
            Facilitating this cross-cultural monetary exchange was a network of professional money 
            changers who operated in port cities and market towns. These financial intermediaries possessed 
            specialized knowledge about different currencies' values and metal contents. Contemporary 
            documents mention Christian, Jewish, and Muslim money changers working in close proximity 
            in cities like Acre, Alexandria, and Constantinople.
          </p>
          
          <p>
            These professionals could assess foreign coins, convert between currency systems, and facilitate 
            international trade. Their existence points to the sophisticated financial networks that 
            underpinned the medieval Mediterranean economy, networks that often ignored the religious 
            divisions emphasized in historical narratives.
          </p>
        </div>
      </div>

      {selectedCoinData && (
        <CoinDetail
          open={!!selectedCoin}
          onOpenChange={(open) => {
            if (!open) setSelectedCoin(null);
          }}
          coin={selectedCoinData}
        />
      )}
    </Layout>
  );
};

export default Circulation;
