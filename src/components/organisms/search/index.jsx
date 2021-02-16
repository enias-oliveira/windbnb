import {useEffect, useState} from "react"
import { useLocations } from "../../../store/locations-context";

import SearchButton from "../../molecules/search-button";
import SearchHeader from "../../molecules/search-header";
import SearchLocations from "../../molecules/search-locations";

const Search = () => {

  const [searchOptions, setSearchOptions] = useState([])

  const locations = useLocations()


  useEffect(() => {
    setSearchOptions(getUniqueLocations(locations))
  }, [locations])

  const getUniqueLocations = (locations) => {

    const cityCountryPair = locations.map(location => `${location.city}, ${location.country}`)

    return ( Array.from(new Set(cityCountryPair)))
  }

  return (
    <>
      <section className="fixed top-0 flex flex-col justify-between items-center h-5/6 w-screen bg-white">
        <SearchHeader/>
        <SearchLocations locations={searchOptions} />
        <SearchButton />
      </section>
    </>
  );
};


export default Search;
