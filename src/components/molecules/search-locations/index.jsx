const SearchLocations = ({locations, setLocation}) => {
  return (
    <ul className="bg-blue-300">
      {locations.map((location, idx) =>   {
      
      const handleClick = () => setLocation(location)

      return <li key={idx} onClick={handleClick}>{location.city}, {location.country}</li> })}
    </ul>
  );
};

export default SearchLocations;
