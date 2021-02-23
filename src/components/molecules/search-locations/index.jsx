import { MapMarkerIcon } from "../../atoms/icons";

const SearchLocations = ({ locations, setLocation, className }) => {
  return (
    <ul
      className={`flex flex-col font-sans text-sm h-52 justify-between ${className}`}
    >
      {locations.map((location, idx) => {
        const handleClick = () => setLocation(location);

        return (
          <li
            key={idx}
            onClick={handleClick}
            className="flex items-center h-12 pl-12"
          >
            <MapMarkerIcon />
            <div className="ml-1.5">
              {location.city}, {location.country}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchLocations;
