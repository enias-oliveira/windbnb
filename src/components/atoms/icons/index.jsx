import { ReactComponent as LogoSVG } from "./logo.svg";
import { FaSearch } from "react-icons/fa";

export const Logo = () => {
  return (
    <>
      <LogoSVG className="absolute top-12 left-24" />
    </>
  );
};

export const SearchIcon = () => {
  return (
    <>
      <FaSearch className="text-wine-red" />
    </>
  );
};
