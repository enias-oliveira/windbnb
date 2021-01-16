import ListHeader from "../../molecules/list-header";
import ListItem from "../../molecules/list-item";

const List = ({ data }) => {
  return (
    <div className="flex flex-col items-center">
      <ListHeader quantity={data.length} />
      <section>
        {data.map((listItem, idx) => (
          <ListItem item={listItem} key={idx} />
        ))}
      </section>
      ;
    </div>
  );
};

export default List;
