import CardTitle from "../../atoms/card-title";
import Img from "../../atoms/img";
import CardDescription from "../card-description";

const Card = ({ item }) => {
  return (
    <article className="flex flex-col items-center mb-8">
      <Img
        url={item.photo}
        alt={`${item.type} in ${item.city}, ${item.country}`}
      />
      <CardDescription item={item} />
      <CardTitle>{item.title}</CardTitle>
    </article>
  );
};

export default Card;
