import { SearchIcon } from "../../atoms/icons";
import FilterLabel from "../filter-label";

import { useSearchUpdate} from "../../../store/search-context"

const mockupData = {
  location: "Curitiba, Paraná",
  guest: "",
  placeholderLocation: "Where are we going?",
  placeholderGuest: "Add guests",
};

const Filter = () => {
  const toggleSearch = useSearchUpdate()

  const { location, guest, placeholderLocation, placeholderGuest } = mockupData;

  const handleButton = () => {
      toggleSearch()    
  }

  return (
    <button
      onClick={handleButton}
      className="flex  shadow rounded-2xl mx-6 mb-2 md:mr-20
    transform hover:scale-105 cursor-pointer self-center
    "
    >
      <div className="px-5 py-5 border-solid border-gray-100 border-r-2">
        <FilterLabel placeholder={placeholderLocation}>{location}</FilterLabel>
      </div>
      <div className="px-5 py-5">
        <FilterLabel placeholder={placeholderGuest}>{guest}</FilterLabel>
      </div>
      <div className=" px-5 py-5 border-solid border-l-2 border-gray-100">
        <SearchIcon />
      </div>
    </button>
  );
};

export default Filter;
