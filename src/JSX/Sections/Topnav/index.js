import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Topnav = (props) => {
  return (
    <AppBar position="static" className="bg-primary shadow-none">
      <Toolbar>
        <Typography variant="h6" className="mr-auto">Sending...</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Topnav;
