import Stat from "../../atoms/stat";
import Title from "../../atoms/title";

const ListHeader = ({ quantity, city }) => {

  return (
    <header className="flex justify-between items-center w-80 mb-6 mt-2 ">
      <Title>Stays in "{city}"</Title>
      <Stat>{quantity}{quantity > 1 && "+"} stays</Stat>
    </header>
  );
};

export default ListHeader;
