import React from "react";


import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const NewsletterSignup = (props) => {
  return (
    <Container maxWidth={false} className="bg-primary">
      <Container maxWidth="md" className="py-5 text-light">
        <Typography variant="h5" className="mb-5 text-center text-light">Sign up for accounts</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={7} md={8} lg={9}>
            <p>User accounts are not available at this time so please enter your email if you are interested in this service. We will create an account for you using this email and notify you when it is ready.</p>
            <p className="m-0"><b>Sign up for updates on:</b></p>
            <ul>
              <li>When user accounts are ready</li>
              <li>New features</li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={5} md={4} lg={3}>
            <form noValidate autoComplete="off" className="d-flex flex-column">
              <TextField label="Email" margin="dense" variant="outlined" color="secondary" className="mb-3 text-white"/>
              <Button variant="contained" disableElevation className="bg-very-dark text-light">SEND</Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default NewsletterSignup;
