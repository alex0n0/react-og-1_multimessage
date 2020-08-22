import React from 'react';
// import logo from './logo.svg';

import { Switch, Route } from "react-router-dom";
import Home from "./JSX/Pages/Home";

function App() {
  return (
    <Switch>
      <Route to="/" exact component={Home}/>
    </Switch>
  );
}

export default App;
