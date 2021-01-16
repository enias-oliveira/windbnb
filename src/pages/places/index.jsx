import { useState, useEffect } from "react";
import axios from "axios";

import List from "../../components/organisms/list";
import Banner from "../../components/organisms/banner";
import Credits from "../../components/molecules/credits";

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
    <div className="relative">
      <Banner />
      <main>
        <List data={locations} />
      </main>
      <Credits />
    </div>
  );
};

export default Places;
