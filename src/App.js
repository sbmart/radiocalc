import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RCalc from "./RCalc";

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
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/rcfiltercalc">
            <RCalc />
          </Route>
          {/* 
          <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </>

    </Router>
  );
};
export default App;
