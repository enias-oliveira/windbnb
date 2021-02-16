import React, { useState, useContext } from "react";

const SearchContext = React.createContext()
const SearchUpdateContext = React.createContext()

export const useSearch = () => useContext(SearchContext)

export const useSearchUpdate = () => useContext(SearchUpdateContext) 

const SearchProvider = ({children}) => {

  const [ isSearchActive, setIsSearchActive] = useState(false)

  const toggleSearch = () => {
    setIsSearchActive(prevState => !prevState)
  }

  return (
    <SearchContext.Provider value={isSearchActive}>
      <SearchUpdateContext.Provider value={toggleSearch}>
      {children}
      </SearchUpdateContext.Provider>
    </SearchContext.Provider>
  )
}

export default SearchProvider