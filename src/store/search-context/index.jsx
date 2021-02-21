import React, { useState, useContext } from "react";

const SearchContext = React.createContext()
const SearchUpdateContext = React.createContext()

export const useSearch = () => useContext(SearchContext)

export const useSearchUpdate = () => useContext(SearchUpdateContext) 

const SearchProvider = ({children}) => {

  const [ searchOptions, setSearchOptions] = useState({
    isSearchVisible : false,
    location : { 
      city : "Helsinki",
      country : "Finland"},
    guests : 0
  })

  const updateSearchOptions = (newState) => {
      setSearchOptions(newState)
  }

  return (
    <SearchContext.Provider value={searchOptions}>
      <SearchUpdateContext.Provider value={updateSearchOptions}>
      {children}
      </SearchUpdateContext.Provider>
    </SearchContext.Provider>
  )
}

export default SearchProvider