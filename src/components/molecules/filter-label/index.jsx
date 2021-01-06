import Label from "../../atoms/text/label";
import Placeholder from "../../atoms/text/placeholder";

export const FilterLabel = ({ children, placeholder }) => {
  return !!children ? (
    <Label>{children}</Label>
  ) : (
    <Placeholder>{placeholder}</Placeholder>
  );
};

export default FilterLabel;
