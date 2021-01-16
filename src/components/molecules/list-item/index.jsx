import Img from "../../atoms/img";

const ListItem = ({ item }) => {
  return (
    <article className="flex flex-col items-center">
      <Img
        url={item.photo}
        alt={`${item.type} in ${item.city}, ${item.country}`}
      />
      <section className="flex">
        {item.superHost && <p>SuperHost</p>}
        <p>{item.type}</p>
        <p>{item.rating}</p>
      </section>
      <h2>{item.title}</h2>
    </article>
  );
};

export default ListItem;
