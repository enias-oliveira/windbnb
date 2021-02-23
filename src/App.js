import Home from "./pages/home";
import Places from "./pages/places";

import { Switch, Route } from "react-router-dom";
import Banner from "./components/organisms/banner";
import Credits from "./components/molecules/credits";
import Search from "./components/organisms/search";
import { useSearch } from "./store/search-context";

import data from "./data/data.json";

const App = () => {
  const { locations } = data;

  const { isSearchVisible } = useSearch();

  return (
    <>
      <div className="relative min-h-screen h-auto w-screen">
        <main className="absolute h-screen w-screen">
          <Banner />
          {isSearchVisible && <Search locations={locations} />}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/places">
              <Places locations={locations} />
            </Route>
            <Route exact path="/development"></Route>
          </Switch>
        </main>
        <Credits />
      </div>
    </>
  );
};

export default App;
