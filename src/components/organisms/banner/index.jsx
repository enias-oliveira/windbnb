import { Logo } from "../../atoms/icons";
import Filter from "../../molecules/filter";

const Banner = () => {
  return (
    <header className="relative flex justify-between h-32 w-screen">
      <Logo />
      <Filter />
    </header>
  );
};

export default Banner;
