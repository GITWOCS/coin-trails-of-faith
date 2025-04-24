
import React from "react";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from "framer-motion";

const CirculationMap = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto bg-white/70 p-4 rounded-lg shadow-lg space-y-4">
      <h3 className="text-2xl font-medieval text-center mb-4">Coin Circulation Map</h3>
      
      <Card className="overflow-hidden bg-parchment">
        <AspectRatio ratio={16/10}>
          <div className="relative w-full h-full">
            <img 
              src="/lovable-uploads/f882ad6e-1820-4abc-bf6d-19ee3d820179.png" 
              alt="Map of the Crusades from 1096-1204"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/10" />
          </div>
        </AspectRatio>
      </Card>
    </div>
  );
};

export default CirculationMap;
