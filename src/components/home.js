import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from "./Pages/Home";
import Merch from "./Pages/Merch";

const App = () => {
  return (
    <Router>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/merch">Merch</Link>
      </div>

      <Switch>
        
        <Route path="/home" exact>
          <Home/>
        </Route>

        <Route path="/merch" exact>
          <Merch/>
        </Route>


      </Switch>
    </Router>
  )
}

export default App;