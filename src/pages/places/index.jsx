import List from "../../components/organisms/list";

const Places = ({ locations }) => {
  const b = "batata";

  return (
    <main className="relative">
      <List data={locations} />
    </main>
  );
};

export default Places;
