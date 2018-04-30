import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Containers from './containers/containers_container';
import Plans from './plans/plans_container';

const App = () => (
  <div className="app">
    < Containers />
    < Plans />
  </div>
);

export default App;