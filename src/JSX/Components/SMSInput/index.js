import React from "react";
import TextField from '@material-ui/core/TextField';
import ChatIcon from '@material-ui/icons/Chat';

const SMSInput = (props) => {
  const handleContactChange = (e) => {
    let value = e.currentTarget.value;
    props.handleSetContactCounter(value);
  }

  const handleContactBlur = (e) => {
    let value = Number(props.contactCounter);
    if (value > 0) {
      value = Math.floor(value);
    } else {
      value = 0;
    }
    props.handleSetContactCounter(Number(value));
  }

  const handleMessageChange = (e) => {
    let value = e.currentTarget.value;
    let charcount = value.trim().length;
    // Show full SMS_CHAR_LIMIT letter count for each msg when not the first msg
    if (charcount % props.SMS_CHAR_LIMIT === 0 && charcount > 0) {
      props.handleSetCharCounter(props.SMS_CHAR_LIMIT);
    } else {
      props.handleSetCharCounter(charcount % props.SMS_CHAR_LIMIT);
    }
    // Each msg is SMS_CHAR_LIMIT (180) chars long. Partial msgs are billed as 1 msg
    props.handleSetSMSCounter(Math.ceil(charcount / parseFloat(props.SMS_CHAR_LIMIT)));
    props.handleSetMessage(value);
  };



  return (
    <div className="mb-5">
      <TextField
        margin="dense" variant="outlined" fullWidth={true}
        label="Contacts" type="number" min="0" step="1"
        value={props.contactCounter}
        onChange={handleContactChange}
        onBlur={handleContactBlur}
        className="mb-3"
      />
      <TextField
        multiline rows={6} variant="outlined" fullWidth={true}
        label="Message"
        value={props.message}
        onChange={handleMessageChange}
      />
      <div className="d-flex">
        <span className="mr-auto b-600">{props.charCounter}/180 ({props.smsCounter} SMS)</span>
        <span className="b-600">{props.smsCounter * props.contactCounter} <ChatIcon className="text-primary ml-1" /></span>
      </div>
      <div className="d-flex">
        <span className="ml-auto">({props.smsCounter} SMS &times; {props.contactCounter} contacts)</span>
      </div>
    </div>
  );
}

export default SMSInput;
