import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import CategoryCard from "@/components/home/CategoryCard";
import TimelineComponent from "@/components/common/TimelineComponent";
import CoinOfTheDay from "@/components/home/CoinOfTheDay";

const timelineEvents = [
  {
    id: "first-crusade",
    year: "1095-1099",
    title: "First Crusade",
    description: "Pope Urban II calls for the First Crusade at the Council of Clermont, leading to the establishment of the Crusader States in the Levant.",
  },
  {
    id: "kingdom-jerusalem",
    year: "1099-1187",
    title: "Kingdom of Jerusalem",
    description: "The First Crusader State mints its own coins, including the silver Cross Denier featuring Christian symbols.",
  },
  {
    id: "saladin",
    year: "1187",
    title: "Saladin Captures Jerusalem",
    description: "After the Battle of Hattin, Saladin recaptures Jerusalem and introduces Ayyubid coinage to the region.",
  },
  {
    id: "fourth-crusade",
    year: "1204",
    title: "Fourth Crusade",
    description: "Crusaders sack Constantinople, leading to the Latin Empire and new coin designs incorporating both Byzantine and Western elements.",
  },
  {
    id: "mamluk-era",
    year: "1250-1517",
    title: "Mamluk Sultanate",
    description: "The Mamluks defeat both Crusaders and Mongols, establishing a monetary system that influences the entire region.",
  },
];

const Index = () => {
  return (
    <Layout>
      <Hero />

      {/* Categories Section */}
      <section id="explore" className="page-container py-16">
        <h2 className="section-heading">Explore Coin Categories</h2>
        <p className="text-center max-w-3xl mx-auto mb-12">
          Discover the fascinating world of medieval coins from the Crusades era,
          revealing the complex interactions between Christian and Muslim
          civilizations through their numismatic heritage.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CategoryCard
            title="Muslim Coins"
            description="Explore the exquisite gold dinars and silver dirhams of the Islamic world during the Crusades era."
            imageSrc="/lovable-uploads/d316ba03-232c-4685-aa9c-c33b9decce4d.png"
            link="/muslim-coins"
            variant="muslim"
            imageClasses="object-center"
          />
          
          <CategoryCard
            title="Christian Coins"
            description="Discover the varied coinage of Crusader states and European powers involved in the Holy Land."
            imageSrc="/lovable-uploads/d458abdc-f748-44b0-a367-224498828ed1.png"
            link="/christian-coins"
            variant="christian"
          />
          
          <CategoryCard
            title="Imitation Coins"
            description="Learn about cross-cultural monetary influences and imitative practices between civilizations."
            imageSrc="/lovable-uploads/05cc55c9-92dd-4822-bed8-53ab0a1cb898.png"
            link="/imitations"
            variant="neutral"
          />
          
          <CategoryCard
            title="Circulation & Exchange"
            description="Understand how coins traveled across borders and facilitated trade between different cultures."
            imageSrc="/lovable-uploads/686715d1-64f4-489b-80f9-bc9e448afcd3.png"
            link="/circulation"
            variant="neutral"
          />
          
          <CategoryCard
            title="Interesting Facts"
            description="Explore fascinating facts and stories about the monetary history of the medieval period."
            imageSrc="/lovable-uploads/15d4ffe5-4876-4cd0-a784-192d404db09a.png"
            link="/interesting-facts"
            variant="muslim"
          />
        </div>
      </section>

      {/* Coin of the Day Section - Replacing the Featured Coin Showcase */}
      <section className="bg-white/50 py-16">
        <div className="page-container">
          <CoinOfTheDay />
        </div>
      </section>

      {/* Timeline Section */}
      <section id="learn" className="page-container py-16">
        <h2 className="section-heading">Historical Timeline</h2>
        <p className="text-center max-w-3xl mx-auto mb-12">
          Follow the historical events that shaped the coinage of the Crusades era
        </p>
        <TimelineComponent events={timelineEvents} />
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-christian-dark to-muslim-dark text-white py-16">
        <div className="page-container text-center">
          <h2 className="text-3xl md:text-4xl font-medieval mb-6">
            Begin Your Numismatic Journey
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/80">
            Delve into the rich monetary history of the Crusades era through our
            comprehensive collection and analysis of medieval coins.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/muslim-coins"
              className="bg-gold hover:bg-gold-dark text-black font-medium py-3 px-6 rounded-md transition-colors"
            >
              Start Exploring
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
