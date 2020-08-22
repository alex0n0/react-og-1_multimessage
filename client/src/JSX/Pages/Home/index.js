import React from "react";

import Topnav from "../../Sections/Topnav";
import Messaging from "../../Sections/Messaging";
import NewsletterSignup from "../../Sections/NewsletterSignup";
import FAQ from "../../Sections/FAQ";
import Footer from "../../Sections/Footer";


import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import "./styles.scss";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "asdf"
    }
  }

  render() {
    return (
      <>
        <Topnav></Topnav>
        <Container maxWidth={false}>
          <Container maxWidth="md" className="pt-5">
            <Typography variant="h4" className="mb-4">Mass Messaging</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <p>Porta aliquet facilisi aliquam leo natoque sapien et auctor quam. Libero, consequat vehicula diam ac. Habitasse ullamcorper enim facilisi est nisl donec erat cursus. Enim venenatis tellus lectus fames justo. At massa egestas luctus vitae vel purus.</p>
              </Grid>
              <Grid item xs={12} sm={6}>
                <ul>
                  <li>Mass messaging for $0.30 per message.</li>
                  <li>Unit message price does not include tax</li>
                </ul>
              </Grid>
            </Grid>
          </Container>
        </Container>

        <Messaging></Messaging>

        <NewsletterSignup></NewsletterSignup>
        <Container maxWidth={false} className="bg-gradient">
          <FAQ></FAQ>
          <Footer></Footer>
        </Container>
      </>
    );
  }
}

export default Home;