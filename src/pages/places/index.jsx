import { useState } from "react";

import List from "../../components/organisms/list";

const Places = () => {
  const [locations, setLocations] = useState([]);

  return (
    <main className="relative h-5/6 w-screen">
      <List data={locations} />
    </main>
  );
};

export default Places;
