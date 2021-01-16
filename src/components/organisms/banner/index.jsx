import { Logo } from "../../atoms/icons";
import Filter from "../../molecules/filter";

const Banner = () => {
  return (
    <header
      className="relative h-32 w-screen flex flex-col justify-around items-between
    md:flex-row md:items-center md:justify-between 
    "
    >
      <Logo />
      <Filter />
    </header>
  );
};

export default Banner;
