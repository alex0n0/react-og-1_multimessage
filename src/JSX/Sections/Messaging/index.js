import React, { useState } from "react";

import SMSInput from "../../Components/SMSInput";
import PriceCalculation from "../../Components/PriceCalculation";
import SMSShowcase from "../../Components/SMSShowcase";
import SMSSend from "../../Components/SMSSend";

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const SMS_CHAR_LIMIT = 180;

const Messaging = (props) => {
  const [contactCounter, setContactCounter] = useState(0);

  const [charCounter, setCharCounter] = useState(0);
  const [smsCounter, setSMSCounter] = useState(0);
  const [message, setMessage] = useState("");

  const handleSetContactCounter = (value) => {
    setContactCounter(value);
  }

  const handleSetCharCounter = (value) => {
    setCharCounter(value);
  }

  const handleSetSMSCounter = (value) => {
    setSMSCounter(value);
  }

  const handleSetMessage = (value) => {
    setMessage(value);
  }

  return (
    <Container maxWidth={false}>
      <Container maxWidth="md" className="py-5">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={7}>
            <SMSInput
              contactCounter={contactCounter}
              handleSetContactCounter={handleSetContactCounter}
              charCounter={charCounter}
              handleSetMessage={handleSetMessage}
              smsCounter={smsCounter}
              handleSetSMSCounter={handleSetSMSCounter}
              message={message}
              handleSetCharCounter={handleSetCharCounter}
              SMS_CHAR_LIMIT={SMS_CHAR_LIMIT}
            ></SMSInput>
            <PriceCalculation
              contactCounter={contactCounter}
              smsCounter={smsCounter}
            ></PriceCalculation>
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <SMSShowcase
              message={message}
              SMS_CHAR_LIMIT={SMS_CHAR_LIMIT}
            ></SMSShowcase>
            <SMSSend></SMSSend>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default Messaging;
