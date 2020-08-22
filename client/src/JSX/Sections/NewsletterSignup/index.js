import React from "react";

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const NewsletterSignup = (props) => {
  return (
    <Container maxWidth={false} className="bg-primary">
      <Container maxWidth="md" className="py-5">
        <Typography variant="h5" className="mb-5 text-center text-light">Remembering your contacts</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={7} md={9}>
            <p>You can enter your email for ease of messaging next time</p>
          </Grid>
          <Grid item xs={12} sm={5} md={3}>
            <form noValidate autoComplete="off" className="d-flex flex-column">
              <TextField label="Email" margin="dense" variant="outlined" />
              <Button variant="contained" disableElevation className="bg-very-dark text-light">SEND</Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default NewsletterSignup;
