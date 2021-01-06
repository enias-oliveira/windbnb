import Home from "./pages/home";
import Places from "./pages/places";

import {Switch, Route} from "react-router-dom"

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
      <Home/>
        </Route>
        <Route path="/places">
      <Places/>
        </Route>
      </Switch>
    </>

  );
}

export default App;
