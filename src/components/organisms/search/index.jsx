import { useSearchUpdate } from "../../../store/search-context";

import SearchButton from "../../molecules/search-button";
import SearchHeader from "../../molecules/search-header";
import SearchLocations from "../../molecules/search-locations";


const Search = () => {

    const updateSearchOptions = useSearchUpdate()


  const toggleIsSearchNotActive = () => {
    updateSearchOptions(prevState => ({...prevState, isSearchVisible : false}));
  }

/* 
  useEffect(() => {
    setSearchOptions(getUniqueLocations(locations))
  }, [locations])

  const getUniqueLocations = (locations) => {

    const cityCountryPair = locations.map(location => `${location.city}, ${location.country}`)

    return ( Array.from(new Set(cityCountryPair)))
  } */

  return (
    <>
      <section className="fixed z-50 top-0 flex flex-col justify-between items-center h-5/6 w-screen bg-white">
        <SearchHeader handleIcon={toggleIsSearchNotActive}/>
{/*         <SearchLocations locations={searchOptions} /> */}
        <SearchButton handleButton={toggleIsSearchNotActive}/>
      </section>
    </>
  );
};


export default Search;
