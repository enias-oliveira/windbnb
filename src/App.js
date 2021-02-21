
import Home from "./pages/home";
import Places from "./pages/places";

import { Switch, Route } from "react-router-dom";
import Banner from "./components/organisms/banner";
import Credits from "./components/molecules/credits";
import Search from "./components/organisms/search";
import { useSearch } from "./store/search-context";


const App = () => {

  const {isSearchVisible} = useSearch()
  
  return (
    <>
      <div className="relative min-h-screen h-auto w-screen">
        <main className="absolute h-screen w-screen">
          <Banner />
          { isSearchVisible && <Search  />}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/places">
              <Places />
            </Route>
            <Route exact path="/development">
            </Route>
          </Switch>
        </main>
        <Credits />
      </div>
    </>
  );
};

export default App;
