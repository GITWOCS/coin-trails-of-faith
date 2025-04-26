
interface CoinDetailsGridProps {
  material: string;
  date: string;
  origin: string;
  ruler: string;
}

const CoinDetailsGrid = ({ material, date, origin, ruler }: CoinDetailsGridProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white/70 p-4 rounded-lg">
        <h4 className="text-sm font-semibold text-gray-500">Material</h4>
        <p>{material}</p>
      </div>
      
      <div className="bg-white/70 p-4 rounded-lg">
        <h4 className="text-sm font-semibold text-gray-500">Date</h4>
        <p>{date}</p>
      </div>
      
      <div className="bg-white/70 p-4 rounded-lg">
        <h4 className="text-sm font-semibold text-gray-500">Origin</h4>
        <p>{origin}</p>
      </div>
      
      <div className="bg-white/70 p-4 rounded-lg">
        <h4 className="text-sm font-semibold text-gray-500">Ruler</h4>
        <p>{ruler}</p>
      </div>
    </div>
  );
};

export default CoinDetailsGrid;
