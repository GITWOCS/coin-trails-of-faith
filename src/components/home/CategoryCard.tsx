
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  variant?: "muslim" | "christian" | "neutral";
  imageClasses?: string;
}

const CategoryCard = ({
  title,
  description,
  imageSrc,
  link,
  variant = "neutral",
  imageClasses = "",
}: CategoryCardProps) => {
  return (
    <Link to={link}>
      <motion.div
        className={cn(
          "category-card h-full",
          variant === "muslim" && "category-card-muslim",
          variant === "christian" && "category-card-christian",
          variant === "neutral" && "category-card-neutral"
        )}
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className={cn(
              "w-full h-full object-cover transition-transform duration-500 hover:scale-110",
              imageClasses
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-medieval mb-2">{title}</h3>
          <p className="text-sm text-white/80">{description}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default CategoryCard;
