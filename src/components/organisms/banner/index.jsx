import { Logo } from "../../atoms/images/icons";
import Filter from "../../molecules/filter";

const Banner = () => {
  return (
    <header className="relative flex justify-between">
      <Logo />
      <Filter />
    </header>
  );
};

export default Banner;
