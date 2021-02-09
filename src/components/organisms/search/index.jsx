import SearchButton from "../../molecules/search-button";
import SearchLocations from "../../molecules/search-locations";

const Search = () => {
  return (
    <>
      <section className="fixed top-0 flex flex-col justify-end items-center h-5/6 w-screen bg-white">
        <SearchLocations />
        <SearchButton />
      </section>
    </>
  );
};

export default Search;
