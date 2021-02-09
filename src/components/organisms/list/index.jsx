import ListHeader from "../../molecules/list-header";
import Card from "../../molecules/card";

const List = ({ data }) => {
  const location = "Curitiba";

  return (
    <div className="flex flex-col items-center">
      <ListHeader quantity={data.length} location={location} />
      <section>
        {data.map((listItem, idx) => (
          <Card item={listItem} key={idx} />
        ))}
      </section>
    </div>
  );
};

export default List;
