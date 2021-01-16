import { StarIcon } from "../../atoms/icons";

const Rating = ({ children }) => {
  return (
    <div className="flex items-center">
      <StarIcon />
      <p className="font-light text-sm ml-1">{children}</p>
    </div>
  );
};

export default Rating;
