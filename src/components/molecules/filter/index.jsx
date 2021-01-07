import FilterLabel from "../filter-label";

const Filter = () => {
  const location = "Curitiba, Paraná";
  const guest = "";
  const placeholder = "Where are we going?";
  const placeholderGuest = "Add guests";

  return (
    <div className="flex absolute right-24 top-8 shadow rounded-2xl">
      <FilterLabel placeholder={placeholder}>{location}</FilterLabel>
      <FilterLabel placeholder={placeholderGuest}>{guest}</FilterLabel>
    </div>
  );
};

export default Filter;
