import { ReactComponent as LogoSVG } from "./logo.svg";
import { FaSearch } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <>
      <Link to="/">
        <LogoSVG
          className="ml-2 md:ml-20 cursor-pointer transform hover:scale-105
      "
        />
      </Link>
    </>
  );
};

export const SearchIcon = () => {
  return (
    <>
      <FaSearch className="text-wine-red " />
    </>
  );
};

export const StarIcon = () => {
  return (
    <>
      <AiFillStar className="text-wine-red opacity-70" />
    </>
  );
};
