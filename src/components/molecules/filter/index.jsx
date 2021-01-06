import FilterLabel from "../filter-label";

const Filter = () => {
  const location = "Curitiba";
  const placeholder = "Where are we going?";

  return (
    <>
      <div>
        <FilterLabel placeholder={placeholder}>{location}</FilterLabel>
      </div>
    </>
  );
};

export default Filter;
