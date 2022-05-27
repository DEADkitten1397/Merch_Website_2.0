import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from "./Pages/Home";
import Merch from "./Pages/Merch";
import EPK from "./Pages/EPK";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>

        <Route path="/merch" exact>
          <Merch/>
        </Route>

        <Route path="/EPK" exact>
          <EPK/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;