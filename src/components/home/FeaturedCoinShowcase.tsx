
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coins, Info } from "lucide-react";
import { Link } from "react-router-dom";

const featuredCoins = [
  {
    id: "fatimid",
    title: "Fatimid Dinar",
    image: "/lovable-uploads/d316ba03-232c-4685-aa9c-c33b9decce4d.png",
    backImage: "/lovable-uploads/b9deed32-2868-47aa-8b3a-156b1aead5f7.png",
    description:
      "Gold dinar from the Fatimid Caliphate featuring intricate Arabic calligraphy and Islamic artistic motifs.",
    category: "muslim",
    link: "/muslim-coins",
  },
  {
    id: "crusader",
    title: "Crusader Denier",
    image: "/lovable-uploads/d458abdc-f748-44b0-a367-224498828ed1.png",
    backImage: "/lovable-uploads/4b735d91-8e13-4833-93bd-0a68008111e5.png",
    description:
      "Silver denier from the Kingdom of Jerusalem, struck during the height of Crusader rule in the Holy Land.",
    category: "christian",
    link: "/christian-coins",
  },
  {
    id: "byzantine",
    title: "Byzantine Hyperpyron",
    image: "/lovable-uploads/3728a254-fe2e-43f3-b24e-986e8a50f4dc.png",
    backImage: "/lovable-uploads/6c2a747e-0bf3-4cf8-b460-65809e9c7ad7.png",
    description:
      "Gold coin from the Byzantine Empire featuring Christ Pantocrator, influential in both Christian and Muslim territories.",
    category: "christian",
    link: "/christian-coins",
  },
  {
    id: "umayyad",
    title: "Umayyad Dinar",
    image: "/lovable-uploads/b77d9162-8ae7-45c5-95c8-3900af76a12f.png",
    backImage: "/lovable-uploads/6c2a747e-0bf3-4cf8-b460-65809e9c7ad7.png",
    description:
      "The first purely Islamic gold coinage, featuring only textual inscriptions in accordance with Islamic principles.",
    category: "muslim",
    link: "/muslim-coins",
  },
];

const FeaturedCoinShowcase = () => {
  const [flipped, setFlipped] = useState<{ [key: string]: boolean }>({});

  const flipCoin = (id: string) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-medieval mb-3">Featured Coins</h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          Discover these remarkable specimens from our collection, representing the diverse
          numismatic heritage of the Crusades era. Click on any coin to see both sides.
        </p>
      </div>

      <Carousel className="w-full">
        <CarouselContent>
          {featuredCoins.map((coin) => (
            <CarouselItem key={coin.id} className="md:basis-1/2 lg:basis-1/3">
              <Card className={`bg-parchment border-${coin.category === "christian" ? "christian-dark" : "muslim-dark"} border-2`}>
                <CardContent className="p-6 flex flex-col items-center">
                  <div
                    className="w-48 h-48 relative cursor-pointer mb-4"
                    onClick={() => flipCoin(coin.id)}
                  >
                    <motion.div
                      className="w-full h-full absolute backface-hidden"
                      animate={{
                        rotateY: flipped[coin.id] ? 180 : 0,
                      }}
                      transition={{ duration: 0.6 }}
                      style={{
                        backfaceVisibility: "hidden",
                      }}
                    >
                      <img
                        src={coin.image}
                        alt={`${coin.title} - Front`}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                    <motion.div
                      className="w-full h-full absolute backface-hidden"
                      initial={{ rotateY: 180 }}
                      animate={{
                        rotateY: flipped[coin.id] ? 360 : 180,
                      }}
                      transition={{ duration: 0.6 }}
                      style={{
                        backfaceVisibility: "hidden",
                      }}
                    >
                      <img
                        src={coin.backImage}
                        alt={`${coin.title} - Back`}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  </div>
                  <h3 className="font-medieval text-xl mb-2">{coin.title}</h3>
                  <p className="text-center text-sm mb-4">{coin.description}</p>
                  <Link to={coin.link}>
                    <Button 
                      variant="outline"
                      className={`gap-2 border-${coin.category === "christian" ? "christian-dark" : "muslim-dark"}`}
                    >
                      <Info size={16} />
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4">
          <CarouselPrevious className="static transform-none mr-4" />
          <CarouselNext className="static transform-none" />
        </div>
      </Carousel>
    </div>
  );
};

export default FeaturedCoinShowcase;
