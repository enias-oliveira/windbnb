import { Link } from "react-router-dom";

export const HeroButton = ({ children }) => {
  return (
    <Link to="/places">
      <button
        className="text-white font-medium p-3 bg-wine-red rounded-xl font-sans
      transform
    hover:scale-110
     "
      >
        {children}
      </button>
    </Link>
  );
};
