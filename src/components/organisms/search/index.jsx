import { useState, useEffect } from "react";

import { useSearch, useSearchUpdate } from "../../../store/search-context";

import SearchButton from "../../molecules/search-button";
import SearchHeader from "../../molecules/search-header";
import SearchLocations from "../../molecules/search-locations";
import FilterLabel from "../../molecules/filter-label";

const Search = ({ locations }) => {
  const [locationsOptions, setLocationsOptions] = useState([]);

  const [selectedOptions, setSelectedOptions] = useState({ guests: 0 });

  const [isGuestInputVisible, setIsGuestInputVisible] = useState(false);

  const updateSearch = useSearchUpdate();
  const { location, guests } = useSearch();

  const updateSearchOptions = (location, guests) => {
    updateSearch((prevState) => ({ ...prevState, location, guests }));
  };

  const toggleGuestInput = () => {
    setIsGuestInputVisible((state) => !state);
  };

  const toggleIsSearchNotActive = () => {
    updateSearch((prevState) => ({
      ...prevState,
      isSearchVisible: false,
    }));
  };

  const handleSearchButton = () => {
    const { location, guests } = selectedOptions;
    updateSearchOptions(location, guests);
    toggleIsSearchNotActive();
  };

  const handleLocationSelector = (location) =>
    setSelectedOptions((prevState) => ({ ...prevState, location }));

  const handleGuestsInput = (e) => {
    const guests = e.target.value;
    setSelectedOptions((prevState) => ({ ...prevState, guests }));
  };

  useEffect(() => {
    setSelectedOptions({ location, guests });
  }, [location, guests]);

  useEffect(() => {
    const uniqueCities = [...new Set(locations.map((cur) => cur.city))];
    const uniqueCitiesWithCountry = uniqueCities.map((city) => ({
      city: city,
      country: locations.find((cur) => cur.city === city).country,
    }));

    setLocationsOptions(uniqueCitiesWithCountry);
  }, [locations]);

  useEffect(() => setIsGuestInputVisible(!!guests), [guests]);

  const locationPlaceholder = "Where are we going?";
  const guestsPlaceholder = "Add guests";

  return (
    <>
      <section className="fixed z-50 top-0 flex flex-col justify-between items-center  h-5/6 w-screen bg-white">
        <div>
          <SearchHeader className="" handleIcon={toggleIsSearchNotActive} />
          <div className="self-start ml-10 ">
            <div className="mt-6">
              <h2 className="font-sans text-xs">LOCATION</h2>
              <FilterLabel placeholder={locationPlaceholder}>
                {selectedOptions.location?.city}
              </FilterLabel>
            </div>
            <div className="mt-5">
              <h2 className="font-sans text-xs">GUESTS</h2>
              {isGuestInputVisible ? (
                <input
                  type="number"
                  value={selectedOptions.guests}
                  onChange={handleGuestsInput}
                  className="font-sans text-xs "
                />
              ) : (
                <div onClick={toggleGuestInput}>
                  <FilterLabel placeholder={guestsPlaceholder} />
                </div>
              )}
            </div>
          </div>
          <SearchLocations
            className="mt-12"
            locations={locationsOptions}
            setLocation={handleLocationSelector}
          />
        </div>
        <SearchButton handleButton={handleSearchButton} />
      </section>
    </>
  );
};

export default Search;
