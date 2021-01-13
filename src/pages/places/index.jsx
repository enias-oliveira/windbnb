import { useState, useEffect } from "react";
import axios from "axios";

import List from "../../components/organisms/list";

const Places = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const getLocations = () => {
      axios
        .get("https://windbnb-server.herokuapp.com/locations")
        .then((response) => setLocations(response.data));
    };

    getLocations();
  }, []);

  return (
    <main className="relative h-5/6 w-screen">
      <List data={locations} />
    </main>
  );
};

export default Places;
