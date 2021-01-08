import { ReactComponent as LogoSVG } from "./img/logo.svg";
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
