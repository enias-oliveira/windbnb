import Home from "./pages/home";
import Places from "./pages/places";

import { Switch, Route } from "react-router-dom";
import Credits from "./components/molecules/credits";
import Banner from "./components/organisms/banner";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/places">
          <Places />
        </Route>
      </Switch>
    </>
  );
};

export default App;
