import Home from "./pages/home";
import Places from "./pages/places";

import { Switch, Route } from "react-router-dom";
import Banner from "./components/organisms/banner";
import Credits from "./components/molecules/credits";
import Search from "./components/organisms/search";

const App = () => {
  return (
    <>
      <div className="relative min-h-screen h-auto w-screen">
        <main className="absolute h-screen w-screen">
          <Banner />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/places">
              <Places />
            </Route>
            <Route exact path="/development">
              <Search />
            </Route>
          </Switch>
        </main>
        <Credits />
      </div>
    </>
  );
};

export default App;
