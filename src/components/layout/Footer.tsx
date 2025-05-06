
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-aged-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-medieval mb-4">Crusader Coins</h3>
            <p className="text-aged-light">
              Exploring the fascinating world of numismatics during the Crusades era,
              illustrating the cultural, religious, and economic exchanges between 
              Christian and Muslim civilizations.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-medieval mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/muslim-coins" className="text-aged-light hover:text-white transition">
                  Muslim Coins
                </Link>
              </li>
              <li>
                <Link to="/christian-coins" className="text-aged-light hover:text-white transition">
                  Christian Coins
                </Link>
              </li>
              <li>
                <Link to="/imitations" className="text-aged-light hover:text-white transition">
                  Imitation Coins
                </Link>
              </li>
              <li>
                <Link to="/circulation" className="text-aged-light hover:text-white transition">
                  Circulation & Exchange
                </Link>
              </li>
              <li>
                <Link to="/interesting-facts" className="text-aged-light hover:text-white transition">
                  Interesting Facts
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-medieval mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/bibliography" className="text-aged-light hover:text-white transition">
                  Bibliography
                </Link>
              </li>
              <li>
                <Link to="/museums" className="text-aged-light hover:text-white transition">
                  Museums & Collections
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-aged-light hover:text-white transition">
                  Academic Research
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-aged-light hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-aged text-center">
          <p className="text-aged-light">
            © {new Date().getFullYear()} Crusader Coins | Educational Website on Medieval Numismatics
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
