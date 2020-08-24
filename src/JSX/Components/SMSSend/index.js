import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import CircularProgress from '@material-ui/core/CircularProgress';

const SMSSend = (props) => {
  const [isSending, setSending] = useState(false);

  const sendMessage = () => {
    setSending(true);
    setTimeout(() => {
      setSending(false);
    },3000);
  }

  // NOTE: trim() message before sending
  return (
    <div>
      <Button
        onClick={() => { sendMessage() }}
        variant="contained"
        disableElevation
        fullWidth={true}
        disabled={isSending}
        className="btn-secondary position-relative">
        {isSending ? "SENDING..." : "SEND"}
        <div className="position-absolute d-flex align-items-center"
          style={{ right: "0.5rem", top: "50%", transform: "translateY(-50%)" }}>
          {isSending ? <CircularProgress size={20} /> : <SendIcon />}
        </div>
      </Button>

    </div>
  );
}

export default SMSSend;
