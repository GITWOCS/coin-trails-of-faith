
import React from "react";
import { Globe } from "lucide-react";

const InteractiveMapPlaceholder = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-parchment">
      <Globe size={56} className="text-christian-dark mb-4" />
      <h3 className="font-medieval text-xl mb-2">Interactive Map Coming Soon</h3>
      <p className="text-center max-w-md text-base text-gray-700 mb-1">
        A live, interactive map showing Crusader coin circulation and key historical hotspots will be available soon.
      </p>
      <p className="text-center text-sm text-gray-500">
        (Add your Mapbox public token to enable the real map.)
      </p>
    </div>
  );
};

export default InteractiveMapPlaceholder;
