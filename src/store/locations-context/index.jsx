import React, { useState, useContext } from "react";

import data from "./data.json";

const LocationsContext = React.createContext();
const LocationsCitySearchContext = React.createContext();

export const useLocations = () => useContext(LocationsContext);

export const useLocationCitySearch = () => {
  useContext(LocationsCitySearchContext);
};

const LocationsProvider = ({ children }) => {
  const [filteredLocations, setFilteredLocations] = useState([]);

  const searchLocationsCity = (city) => {
    const searchedLocations = filteredLocations.filter(
      (location) => city in location.city
    );

    setFilteredLocations(searchedLocations);
  };

  return (
    <LocationsContext.Provider value={data.locations}>
      <LocationsCitySearchContext.Provider value={searchLocationsCity}>
        {children}
      </LocationsCitySearchContext.Provider>
    </LocationsContext.Provider>
  );
};

export default LocationsProvider;
