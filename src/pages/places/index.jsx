import List from "../../components/organisms/list";

import data from "./data.json"

const Places = () => {

  const locations = data.locations;

  return (
      <main className="relative">
        <List data={locations} />
      </main>
  );
};

export default Places;
