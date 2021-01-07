import Label from "../../atoms/text/label";
import Placeholder from "../../atoms/text/placeholder";

export const FilterLabel = ({ children, placeholder }) => {
  return (
    <div className="px-4 py-5">
      {!!children ? (
        <Label>{children}</Label>
      ) : (
        <Placeholder>{placeholder}</Placeholder>
      )}
    </div>
  );
};

export default FilterLabel;
