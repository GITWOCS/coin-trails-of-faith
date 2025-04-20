
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const CirculationMap = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const updateCanvasDimensions = () => {
      const container = canvas.parentElement;
      if (!container) return;
      
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetWidth * 0.6; // Aspect ratio for the map
      
      drawMap();
    };
    
    // Draw the map and trade routes
    const drawMap = () => {
      if (!ctx) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw map background (simplified for this example)
      ctx.fillStyle = '#e6d7b8';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw Mediterranean Sea
      ctx.fillStyle = '#a4cae6';
      const seaWidth = canvas.width * 0.7;
      const seaHeight = canvas.height * 0.4;
      const seaX = canvas.width * 0.15;
      const seaY = canvas.height * 0.3;
      ctx.fillRect(seaX, seaY, seaWidth, seaHeight);
      
      // Draw landmasses (simplified)
      ctx.fillStyle = '#ccb68e';
      
      // Europe
      ctx.beginPath();
      ctx.moveTo(seaX, seaY);
      ctx.lineTo(seaX + seaWidth * 0.4, seaY - seaHeight * 0.3);
      ctx.lineTo(seaX + seaWidth, seaY);
      ctx.fill();
      
      // North Africa
      ctx.beginPath();
      ctx.moveTo(seaX, seaY + seaHeight);
      ctx.lineTo(seaX + seaWidth * 0.8, seaY + seaHeight);
      ctx.lineTo(seaX + seaWidth * 0.8, seaY + seaHeight * 1.3);
      ctx.lineTo(seaX, seaY + seaHeight * 1.3);
      ctx.fill();
      
      // Draw key cities/regions
      drawCity(seaX + seaWidth * 0.1, seaY - seaHeight * 0.1, 'Venice', '#9B2226');
      drawCity(seaX + seaWidth * 0.3, seaY - seaHeight * 0.05, 'Constantinople', '#9B2226');
      drawCity(seaX + seaWidth * 0.6, seaY - seaHeight * 0.15, 'Jerusalem', '#9B2226');
      drawCity(seaX + seaWidth * 0.45, seaY + seaHeight * 1.1, 'Cairo', '#2C5F2D');
      drawCity(seaX + seaWidth * 0.7, seaY + seaHeight * 0.9, 'Damascus', '#2C5F2D');
      
      // Draw trade routes
      ctx.strokeStyle = '#8f6c45';
      ctx.lineWidth = 3;
      ctx.setLineDash([5, 3]);
      
      // Venice to Constantinople
      ctx.beginPath();
      ctx.moveTo(seaX + seaWidth * 0.1, seaY - seaHeight * 0.1);
      ctx.lineTo(seaX + seaWidth * 0.3, seaY - seaHeight * 0.05);
      ctx.stroke();
      
      // Constantinople to Jerusalem
      ctx.beginPath();
      ctx.moveTo(seaX + seaWidth * 0.3, seaY - seaHeight * 0.05);
      ctx.lineTo(seaX + seaWidth * 0.6, seaY - seaHeight * 0.15);
      ctx.stroke();
      
      // Jerusalem to Damascus
      ctx.beginPath();
      ctx.moveTo(seaX + seaWidth * 0.6, seaY - seaHeight * 0.15);
      ctx.lineTo(seaX + seaWidth * 0.7, seaY + seaHeight * 0.9);
      ctx.stroke();
      
      // Damascus to Cairo
      ctx.beginPath();
      ctx.moveTo(seaX + seaWidth * 0.7, seaY + seaHeight * 0.9);
      ctx.lineTo(seaX + seaWidth * 0.45, seaY + seaHeight * 1.1);
      ctx.stroke();
      
      // Venice to Cairo (maritime route)
      ctx.strokeStyle = '#4a86b5';
      ctx.beginPath();
      ctx.moveTo(seaX + seaWidth * 0.1, seaY - seaHeight * 0.1);
      ctx.bezierCurveTo(
        seaX + seaWidth * 0.2, seaY + seaHeight * 0.5,
        seaX + seaWidth * 0.4, seaY + seaHeight * 0.7,
        seaX + seaWidth * 0.45, seaY + seaHeight * 1.1
      );
      ctx.stroke();
    };
    
    // Helper function to draw cities
    const drawCity = (x: number, y: number, name: string, color: string) => {
      if (!ctx) return;
      
      // Draw city dot
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, 6, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw city outline
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 1;
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.arc(x, y, 6, 0, Math.PI * 2);
      ctx.stroke();
      
      // Draw city name
      ctx.fillStyle = '#000';
      ctx.font = '14px serif';
      ctx.textAlign = 'center';
      ctx.fillText(name, x, y + 20);
    };
    
    // Initial setup
    updateCanvasDimensions();
    
    // Handle window resize
    window.addEventListener('resize', updateCanvasDimensions);
    
    return () => {
      window.removeEventListener('resize', updateCanvasDimensions);
    };
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto bg-white/70 p-4 rounded-lg shadow-lg">
      <h3 className="text-2xl font-medieval text-center mb-4">Coin Circulation Map</h3>
      <div className="relative aspect-[5/3]">
        <canvas 
          ref={canvasRef} 
          className="w-full h-full"
        />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-christian mr-2"></div>
          <span className="text-sm">Christian Cities/Trade Centers</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-muslim mr-2"></div>
          <span className="text-sm">Muslim Cities/Trade Centers</span>
        </div>
        <div className="flex items-center">
          <div className="w-10 h-0.5 bg-aged-dark mr-2 dashed"></div>
          <span className="text-sm">Land Trade Routes</span>
        </div>
        <div className="flex items-center">
          <div className="w-10 h-0.5 bg-blue-500 mr-2 dashed"></div>
          <span className="text-sm">Maritime Trade Routes</span>
        </div>
      </div>
    </div>
  );
};

export default CirculationMap;
