import { useSearchUpdate } from "../../../store/search-context"
import { CloseIcon } from "../../atoms/icons"

const SearchHeader = () => {

  const toggleSearch = useSearchUpdate()

  const handleButton = () => {
      toggleSearch()
  }

  return (
    <header>

    <div className="flex  justify-between items-center w-screen mt-5 ">
      <h1 className="font-sans text-sm ml-3">Edit your search</h1>
      <button 
      onClick={handleButton}
       className="mr-5">
      <CloseIcon/>
      </button>
    </div>
      
    </header>
  )
}

export default SearchHeader
