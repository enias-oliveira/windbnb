import Badge from "../../atoms/badge";
import CardLabel from "../../atoms/card-label";
import Rating from "../rating";

const CardDescription = ({ item }) => {
  return (
    <section className="flex justify-around items-center w-80 p-2 font-sans">
      {item.superHost && <Badge>Super Host</Badge>}
      <CardLabel>{item.type}</CardLabel>
      <Rating>{item.rating}</Rating>
    </section>
  );
};

export default CardDescription;
