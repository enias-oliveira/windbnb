import ListHeader from "../../molecules/list-header";

const List = ({ data }) => {
  console.log(data);
  return (
    <>
      <ListHeader />
      <section className=" min-h-96 h-full">
        {data.map((listItem, idx) => {
          return (
            <div key={idx}>
              <h3>{listItem.city}</h3>
              <h4>{listItem.country}</h4>
              <p>{listItem.title}</p>
            </div>
          );
        })}
      </section>
      ;
    </>
  );
};

export default List;
