import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RCalc from "./RCalc";
import Home from "./Home"
import ResCalc from "./ResCalc"

const App = () => {

  return (
    <Router>
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rcfiltercalc">RCalc</Link>
            </li>
            <li>
              <Link to="/rescalc">ResCalc</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/rcfiltercalc">
            <RCalc />
          </Route>
          <Route path="/rescalc">
            <ResCalc />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </>
      {/* <h2>this will be footer component</h2> */}
    </Router>
  );
};
export default App;
