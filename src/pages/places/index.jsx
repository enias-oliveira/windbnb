import List from "../../components/organisms/list";
import Credits from "../../components/molecules/credits";
import { useLocations } from "../../store/locations-context";

const Places = () => {
  const locations = useLocations();

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
