import { Logo } from "../../atoms/images/icons";
import Filter from "../../molecules/filter";

const Banner = () => {
  return (
    <header className="flex justify-between">
      <Logo className="flex-initial" />
      <Filter className="flex-auto " />
    </header>
  );
};

export default Banner;
