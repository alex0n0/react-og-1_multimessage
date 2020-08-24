import React from "react";

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const Footer = (props) => {
  return (
    <Container maxWidth="md" className="py-5">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
        <h6 className="text-muted">&copy;Copyright 2020</h6>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <h6 className="mb-3 text-muted">Address</h6>
          <b >123 Street Sydney, 2000</b>

          <h6 className="mb-3 mt-4 text-muted">Phone</h6>
          <b>04 1234 1234</b>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <h6 className="text-muted">Made using</h6>
          <img src="https://www.twilio.com/marketing/bundles/company-brand/img/logos/red/twilio-logo-red.png" alt="Twilio logo" height="40px" width="auto"/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Footer;
