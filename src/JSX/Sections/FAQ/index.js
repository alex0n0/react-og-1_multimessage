import React from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const FAQ = (props) => {
  return (
    <Container maxWidth="md" className="pt-5 mb-5">
      <Typography variant="h5" className="mb-5 text-center text-light">FAQs</Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography >Can I view previous my messages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Not at the moment but please provide your email address and we will send a copy to you. You will be notified when our account features are ready and you will be then able to set up your account and view your previous messages.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography >Is there a way to import contacts?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This feature is not currently available but we are actively working on it and hope to have it ready soon.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} >
          <Typography >How will I be charged?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Currently the service is free for the first 100 messages sent per month. Once this offer has ended, a prompt for your payment details, by any major credit card provider, will appear before your message can be send.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}

export default FAQ;
