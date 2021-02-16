import LocationsProvider from "./locations-context"
import SearchProvider from "./search-context"

const Store = ({children}) => {
  return (
    <LocationsProvider>
      <SearchProvider>
      {children}
      </SearchProvider>
    </LocationsProvider>
  )
}

export default Store
