import React from 'react';
// import logo from './logo.svg';

import { Switch, Route } from "react-router-dom";
import Home from "./JSX/Pages/Home";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#fff",
    }
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Switch>
        <Route to="/" exact component={Home} />
      </Switch>
    </MuiThemeProvider>
  );
}

export default App;
