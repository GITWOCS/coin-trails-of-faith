
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import InteractiveCoinRow from "@/components/home/InteractiveCoinRow";
import CoinTabsDetail from "@/components/coin/CoinTabsDetail";

const featuredChristianCoins = [
  {
    id: "cross-denier",
    name: "Cross Denier",
    image: "/lovable-uploads/4b735d91-8e13-4833-93bd-0a68008111e5.png",
    backImage: "/lovable-uploads/0b49f6d0-29b4-4ba4-8cfc-de54d6982564.png",
    era: "12th Century",
    material: "Silver",
    origin: "Kingdom of Jerusalem",
    type: "silver" as const,
  },
  {
    id: "denier-antioch",
    name: "Denier of Bohemond III",
    image: "/lovable-uploads/3728a254-fe2e-43f3-b24e-986e8a50f4dc.png",
    backImage: "/lovable-uploads/f796c6a6-1bc8-4b96-8b24-69077b98eb4f.png",
    era: "12th Century",
    material: "Silver",
    origin: "Antioch",
    type: "silver" as const,
  },
  {
    id: "constantinople-latin",
    name: "Latin Kingdom Constantinople",
    image: "/lovable-uploads/c5c33383-7ca3-4e75-8f6c-43df43dea322.png",
    backImage: "/lovable-uploads/d5a51ca8-1b9f-4512-a357-ed7a647acac1.png",
    era: "13th Century",
    material: "Gold",
    origin: "Constantinople",
    type: "gold" as const,
  },
  {
    id: "richard-i",
    name: "Coin of Richard I",
    image: "/lovable-uploads/ab520e8f-0363-485e-99c4-0de4bf7d543e.png",
    backImage: "/lovable-uploads/29dc74f2-08e5-4eda-8809-40e58be47441.png",
    era: "Late 12th Century",
    material: "Gold",
    origin: "England & Holy Land",
    type: "gold" as const,
  },
];

const ChristianCoins = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-medieval text-center mb-8">Christian Coins</h1>

          {/* Featured Coins Interactive Row */}
          <div className="mb-10">
            <h2 className="text-2xl font-medieval text-center mb-2">Featured Coins</h2>
            <p className="text-center mb-4 text-gray-700">
              Hover to pause—click any coin to see both sides and a full analysis!
            </p>
            <InteractiveCoinRow coins={featuredChristianCoins} direction="left" speed={18} />
          </div>

          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm shadow-lg rounded-lg p-6">
            <p className="mb-6 text-lg">
              Christian coins from the Crusader era represent a fascinating intersection of faith,
              politics, and economics. These coins not only served as currency but also as powerful
              symbols of Christian presence in the Holy Land.
            </p>
            
            <Tabs defaultValue="kingdom-jerusalem" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <TabsTrigger value="kingdom-jerusalem">Kingdom of Jerusalem</TabsTrigger>
                <TabsTrigger value="antioch">Antioch</TabsTrigger>
                <TabsTrigger value="constantinople">Constantinople</TabsTrigger>
                <TabsTrigger value="richard">Richard I</TabsTrigger>
              </TabsList>
              
              <TabsContent value="kingdom-jerusalem" className="mt-6 p-4 bg-parchment rounded-md">
                <h2 className="text-2xl font-medieval mb-4">Cross Denier of the Kingdom of Jerusalem</h2>
                <CoinTabsDetail
                  context={`After the First Crusade captured Jerusalem in 1099, Latin Christians established the Kingdom of Jerusalem as a symbol of divine victory and a stronghold of Western Christendom in the Levant. Among the many challenges they faced was the need to build an economy that could sustain military campaigns, supply cities, and facilitate trade across religious and linguistic boundaries. Coinage was not a side project. It was central to statecraft. The Cross Denier, a small silver coin, was modeled after French deniers but adapted for the Crusader world. It circulated across a land with Arabic-speaking Muslims, Greek-speaking Christians, Armenian communities, and Latin Crusaders. The Kingdom of Jerusalem minted it to declare not only economic stability but also theological certainty. This was Christian land now, and the coin said so with every transaction.`}
                  religion={`The design placed a bold Christian cross at the center of the coin. There were no saints, no kings, just the cross—simple, unmistakable, and unyielding. This choice was deliberate. In the Holy Land, where Islamic coins featured flowing Arabic script and Qur'anic verses, and Byzantine coins depicted Christ Pantocrator or emperors, this coin planted a different kind of flag. It reduced Christian iconography to its most elemental and universally recognized symbol. This cross was not a decorative feature. It was a theological statement. In the heart of the most contested religious space on earth, it announced that the Latin Church now had the final word. The coin turned the cross into currency, fusing devotion and economy in one powerful image.`}
                  political={`The coin's circulation served a dual function. It enabled commerce, but also reinforced authority. Every time a soldier received payment, a merchant made a sale, or a tax collector accepted dues, the coin served as a miniature proclamation of Crusader rule. Its wide use reflected the effectiveness of this messaging. Even those who did not identify with its religious symbolism still accepted it because it worked.`}
                  insight={`The Cross Denier captures one of the most revealing contradictions of Crusader rule. It was meant to symbolize triumph, permanence, and spiritual clarity. Yet its success depended on its ability to be used by people who might not share its message. This coin is not just an artifact of conquest. It is a lesson in negotiation between faith and pragmatism, between declaration and diplomacy.`}
                />
              </TabsContent>
              
              <TabsContent value="antioch" className="mt-6 p-4 bg-parchment rounded-md">
                <h2 className="text-2xl font-medieval mb-4">Denier of Bohemond III (Antioch)</h2>
                <CoinTabsDetail
                  context={`Antioch was one of the most important Crusader cities, sitting at the nexus of East and West, Islam and Christianity, Latin and Greek. Its strategic location meant it was always under pressure, both from external Muslim forces and from internal cultural and religious divisions. When Bohemond III came to power in the late 12th century, his rule reflected a careful balance of aggression and adaptation. His deniers were minted to assert Latin Christian authority, drawing from French and Norman coinage traditions. But they had to be made legible to a population that was overwhelmingly Greek Orthodox, Arabic-speaking, and long accustomed to Byzantine governance. The denier was a form of code-switching. It declared one thing while operating in the space of another.`}
                  religion={`The cross was again the centerpiece. It spoke the language of the Crusades and of militant Christian faith in a city reclaimed for God. Yet, unlike the coins of Jerusalem, Antioch's deniers often coexisted with older Byzantine coins still in circulation. The Latin cross did not erase the city's past. Instead, it sat alongside it, insisting on a new reality even as old loyalties remained. For Bohemond, minting this coin was a form of religious diplomacy. It allowed him to stake a claim without eliminating the population's historical memory. The coin asked people to believe in Latin rule, even as their faith traditions remained closer to Constantinople than to Rome.`}
                  political={`The denier functioned as a tool of unification, even as it proclaimed division. In a city where religious and ethnic boundaries cut across neighborhoods and marketplaces, a common currency was one of the few tools Bohemond had to assert control. The coin was more than a medium of exchange. It was a device for building consensus, or at least compliance. Its Latin inscriptions and Crusader imagery may have alienated some, but its material value brought it into everyday life.`}
                  insight={`Bohemond's denier is not just a Crusader coin. It is a study in strategy. It shows how leaders used currency not only to project power but to embed it into the fabric of life. It reminds us that coins don't just reflect power. They help create it.`}
                />
              </TabsContent>
              
              <TabsContent value="constantinople" className="mt-6 p-4 bg-parchment rounded-md">
                <h2 className="text-2xl font-medieval mb-4">Coins of the Latin Kingdom of Constantinople</h2>
                <CoinTabsDetail
                  context={`The Latin Empire of Constantinople was born not out of divine providence but out of betrayal. The Fourth Crusade, originally aimed at Egypt, was diverted and ultimately culminated in the sack of Constantinople in 1204. What followed was a deeply awkward and unsustainable experiment in Western rule over a deeply Eastern city. The coins minted by the Latin Empire reflect this contradiction. They often borrowed the formats of Byzantine currency, such as thin flans and concave shapes, but repurposed them with Latin inscriptions and Western Christian imagery. These coins were not designed to integrate. They were designed to overwrite.`}
                  religion={`Religiously, the coins were part of a campaign to replace Orthodoxy with Catholicism. They showed crosses, saints rendered in Western styles, and inscriptions in Latin. This was not subtle. It was a visual replacement. Where once Christ Pantocrator reigned on Byzantine coins, now a Latin cross or Madonna made a different claim. The coin became a battleground. Every symbol chosen, every phrase inscribed, was a declaration of which branch of Christianity now claimed supremacy. This was theological warfare rendered in metal.`}
                  political={`Politically, these coins had to function in a city still filled with Greeks. They had to pay soldiers, fund reconstruction, and facilitate trade. Yet, their design made clear that this was no longer a Byzantine space. The coins were both necessary and alienating. Their circulation marks a moment where currency was used not to bridge cultures, but to enforce separation. Yet, over time, economic pragmatism demanded concessions. Later Latin coins became more Byzantine in appearance again, signaling the limits of conquest when money had to flow.`}
                  insight={`These coins embody the contradiction at the heart of the Latin Empire. They were intended to unify under a new order, but they also alienated the very population they were meant to serve. They reveal the limits of imposed rule and the ways in which money can become a site of resistance as well as authority.`}
                />
              </TabsContent>
              
              <TabsContent value="richard" className="mt-6 p-4 bg-parchment rounded-md">
                <h2 className="text-2xl font-medieval mb-4">Coin of Richard I (the Lionheart)</h2>
                <CoinTabsDetail
                  context={`Richard I was a king, a warrior, and considered a legend. However, not a ruler of any Crusader state. Yet his coins, minted in England, carried tremendous symbolic weight during the Third Crusade. Soldiers, pilgrims, and merchants carried his silver with them into the Levant, making his coinage a kind of traveling ambassador. These coins became tokens of Western solidarity. They were not just currency—they were relics of commitment, small pieces of the Christian West embedded in the economy of the East.`}
                  religion={`Richard's coinage featured Christian imagery and Latin inscriptions, asserting his divine right to rule. But in the Crusader context, these coins took on additional meaning. They were symbols of Crusader legitimacy, linking the battlefield to the throne.`}
                  political={`Though not minted for Crusader governance, Richard's coins functioned as political tools. Their presence in the East signaled the ongoing connection between Latin Christendom and the Crusader states. They reminded allies and enemies alike that the struggle for the Holy Land was not isolated, but it was part of a wider Christian world with deep pockets and powerful kings. Their use in the Levant suggests that coins didn't need to be local to matter. They just needed to be trusted. And Richard's were.`}
                  insight={`This coin shows how symbols of power travel. It reminds us that money is never just about metal or value. It carries memory, allegiance, and projection. Richard's coin became an artifact of myth and a token not only of kingship but of a broader Christian narrative.`}
                />
              </TabsContent>
            </Tabs>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default ChristianCoins;
