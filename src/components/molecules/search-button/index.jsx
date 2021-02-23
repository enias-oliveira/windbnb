import { SearchIcon } from "../../atoms/icons";
import Button from "../../atoms/buttons";

const SearchButton = ({ handleButton }) => {
  return (
    <div className="mb-5">
      <Button onClick={handleButton}>
        <div className="flex justify-evenly w-28 py-1.5">
          <SearchIcon white />
          <p className="">Search</p>
        </div>
      </Button>
    </div>
  );
};

export default SearchButton;
