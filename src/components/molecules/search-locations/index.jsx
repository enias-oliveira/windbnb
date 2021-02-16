const SearchLocations = ({locations}) => {
  return (
    <ul className="bg-blue-300">
      {locations.map((location, idx) =>   (<li key={idx}>{location}</li>))  }
    </ul>
  );
};

export default SearchLocations;
