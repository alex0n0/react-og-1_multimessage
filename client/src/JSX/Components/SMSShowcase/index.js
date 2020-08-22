import React from "react";
import "./styles.scss";

const SMSShowcase = (props) => {
  const smsArr = [];
  // splitSMS(props.message, props.SMS_CHAR_LIMIT);
  let tempSms = props.message;
  while (tempSms.length > 0) {
    let result = splitSMS(tempSms, props.SMS_CHAR_LIMIT);
    smsArr.push(result.singleSMS);
    tempSms = result.remainingMessage;
  }

  return (
    <>
      <div className="showcaseWindow card mb-5 mt-2">
        <div className={smsArr.length > 0 ? "card-body p-4": "card-body p-4 d-flex align-items-center justify-content-center"}>
          {
            smsArr.length > 0 ?
              smsArr.map((currSMS, i) =>
                <div key={i} className="p-4 mb-3 showcaseSMS bg-primary-light text-light rounded-lg">
                  {currSMS}
                </div>
              ) : <p className="m-0 text-center text-muted">Enter a message</p>
          }
        </div>
      </div>
    </>
  );
}

const splitSMS = (sms, smsCharLimit) => {
  const lengthToSlice = sms.length >= smsCharLimit ? smsCharLimit : sms.length;
  const firstPart = sms.slice(0, lengthToSlice);
  const secondPart = sms.slice(lengthToSlice);
  return {
    singleSMS: firstPart,
    remainingMessage: secondPart
  }
}

export default SMSShowcase;
