import { SearchIcon } from "../../atoms/icons";
import FilterLabel from "../filter-label";

import { useSearch, useSearchUpdate} from "../../../store/search-context"

const Filter = () => {

  const updateSearchOptions = useSearchUpdate()

  const {location: {city, country}, guests} = useSearch()


  const toggleIsSearchActive = () => {
    updateSearchOptions(prevState => ({...prevState, isSearchVisible : true}))
  }

  const placeholderLocation = "Where are we going?"
  const placeholderGuest = "Add guests"

  return (
    <button
      onClick={toggleIsSearchActive}
      className="flex  shadow rounded-2xl mx-6 mb-2 md:mr-20
    transform hover:scale-105 cursor-pointer self-center
    "
    >
      <div className="px-5 py-5 border-solid border-gray-100 border-r-2">
        <FilterLabel placeholder={placeholderLocation}>{!!city && `${city}, ${country}`}</FilterLabel>
      </div>
      <div className="px-5 py-5">
        <FilterLabel placeholder={placeholderGuest}>{!!guests && `Guests: ${guests}` }</FilterLabel>
      </div>
      <div className=" px-5 py-5 border-solid border-l-2 border-gray-100">
        <SearchIcon />
      </div>
    </button>
  );
};

export default Filter;
