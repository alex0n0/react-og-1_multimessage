import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import Container from '@material-ui/core/Container';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  bg: {
    backgroundColor: "#4352D7"
  },
  list: {
    width: 250,
  },
  menuButton: {
    marginRight: "1rem",
  },
  title: {
    flexGrow: 1,
  },
});

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "asdf",
      drawerOpen: false
    }
  }

  anchor = "left";


  toggleDrawer = () => {
    this.setState({
      ...this.state,
      drawerOpen: !this.state.drawerOpen
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.bg}>
          <Toolbar>
            <IconButton edge="start" onClick={this.toggleDrawer} className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>News</Typography>
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>

        <Drawer anchor={"left"} open={this.state.drawerOpen} onClose={this.toggleDrawer}>
          <List className={classes.list}>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List className={classes.list}>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} secondary={"help"}/>
              </ListItem>
            ))}
          </List>
        </Drawer>

        <Container size="xl">
          <p>ffffs</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
        </Container>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);