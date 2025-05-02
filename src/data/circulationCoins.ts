
export interface CoinData {
  id: string;
  name: string;
  images: string[];
  material: string;
  date: string;
  origin: string;
  ruler: string;
  obverse: string;
  reverse: string;
  history: string;
  significance: string;
  inscriptions?: {
    obverse: string;
    reverse: string;
    translation?: {
      obverse: string;
      reverse: string;
    }
  };
}

export const circulationCoins: CoinData[] = [
  {
    id: "fatimid-dinar",
    name: "Fatimid Dinar",
    images: [
      "/lovable-uploads/e971a400-9a65-4f8b-82d5-ce28d82131a0.png",
      "/lovable-uploads/c50e27d8-2e9a-4fdd-9ac9-7f2dc6e0c56f.png"
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
      "/lovable-uploads/c5c33383-7ca3-4e75-8f6c-43df43dea322.png",
      "/lovable-uploads/d5a51ca8-1b9f-4512-a357-ed7a647acac1.png"
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
      "/lovable-uploads/ab520e8f-0363-485e-99c4-0de4bf7d543e.png",
      "/lovable-uploads/29dc74f2-08e5-4eda-8809-40e58be47441.png"
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
      "/lovable-uploads/e1d6158d-c2b0-44fe-80f1-ddcec0bb54a8.png",
      "/lovable-uploads/7eb0d385-0728-42a3-b04f-dcd9c9f098e1.png"
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
