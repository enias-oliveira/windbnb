import Stat from "../../atoms/stat";
import Title from "../../atoms/title";

const ListHeader = ({ quantity, city }) => {

  return (
    <header className="flex justify-between items-center w-80 mb-6 mt-2 ">
      <Title>Stays in {!!city ? city : "all cities" }</Title>
      <Stat>{quantity <= 10 ? quantity : "10+"} stays</Stat>
    </header>
  );
};

export default ListHeader;
