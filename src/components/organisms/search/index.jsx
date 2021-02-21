import {useState, useEffect} from "react"

import { useSearch, useSearchUpdate } from "../../../store/search-context";

import SearchButton from "../../molecules/search-button";
import SearchHeader from "../../molecules/search-header";
import SearchLocations from "../../molecules/search-locations";


const Search = ({locations}) => {
  const [locationsOptions, setLocationsOptions] = useState([])
  const [selectedLocation, setSelectedLocation] = useState({})

  const updateSearchOptions = useSearchUpdate()
  const {location} = useSearch()

  const updateSearchLocation = (location) => {
    updateSearchOptions(prevState => ({...prevState, location}))
  }

  const toggleIsSearchNotActive = () => {
    updateSearchOptions(prevState => ({...prevState, isSearchVisible : false}));
  }

  const handleSearchButton = () => {
    updateSearchLocation(selectedLocation)
    toggleIsSearchNotActive()
  }

  useEffect(() => {
    setSelectedLocation(location)
  },[])


  useEffect(() => {
  const uniqueCities = [...new Set(locations.map(cur => (cur.city)))]
  const uniqueCitiesWithCountry = uniqueCities.map(city => ({
      city : city,
      country : locations.find(cur=> cur.city === city).country
    }))

  setLocationsOptions(uniqueCitiesWithCountry)

  }, [locations]
  )


  return (
    <>
      <section className="fixed z-50 top-0 flex flex-col justify-between items-center h-5/6 w-screen bg-white">
        <SearchHeader handleIcon={toggleIsSearchNotActive}/>
        {`Selected Location: ${selectedLocation?.city}`}
        <SearchLocations locations={locationsOptions} setLocation={setSelectedLocation} />
        <SearchButton handleButton={handleSearchButton}/>
      </section>
    </>
  );
};


export default Search;
