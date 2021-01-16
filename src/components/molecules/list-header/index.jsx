import Stat from "../../atoms/stat";
import Title from "../../atoms/title";

const ListHeader = ({ quantity }) => {
  return (
    <header className="flex justify-between items-center w-80 mb-6 mt-2 ">
      <Title>Stays in "Temporário"</Title>
      <Stat>{quantity} stays</Stat>
    </header>
  );
};

export default ListHeader;
