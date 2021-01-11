import Home from "./pages/home";
import Places from "./pages/places";

import { Switch, Route } from "react-router-dom";
import Credits from "./components/molecules/credits";
import Banner from "./components/organisms/banner";

const App = () => {
  return (
    <>
      <div className="absolute min-h-screen h-auto w-screen flex flex-col justify-between  ">
        <div className="relative h-screen w-screen">
          <Banner />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/places">
              <Places />
            </Route>
          </Switch>
        </div>
        <Credits />
      </div>
    </>
  );
};

export default App;
