import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Parenzo from './Parenzo';
import Cruciani from './Cruciani';
import Spatalino from './Spatalino';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/parenzo" component={Parenzo} />
        <Route path="/cruciani" component={Cruciani} />
        <Route path="/spatalino" component={Spatalino} />
      </Switch>
    </Router>
  );
}

export default App;
