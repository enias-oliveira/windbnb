import { Children } from "react";

const CardTitle = ({ children }) => {
  return (
    <h3 className="font-sans ml-6 self-start font-medium text-md">
      {children}
    </h3>
  );
};

export default CardTitle;
