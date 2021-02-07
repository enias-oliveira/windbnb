import data from "./data.json";

import List from "../../components/organisms/list";
import Credits from "../../components/molecules/credits";

const Places = () => {
  const locations = data.locations;

  return (
    <div className="relative">
      <main>
        <List data={locations} />
      </main>
      <Credits />
    </div>
  );
};

export default Places;
