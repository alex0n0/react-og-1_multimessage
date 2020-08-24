import React from "react";
import LockIcon from '@material-ui/icons/Lock';
import * as numeral from "numeral";

const UNIT_PRICE_CENTS = 30;
const UNIT_COST_CENTS = 5;

const PriceCalculation = (props) => {
  const messageCount = props.contactCounter * props.smsCounter;
  const subtotal = messageCount * UNIT_PRICE_CENTS / 100;
  const tax = subtotal / 10;

  const totalCost = messageCount * UNIT_COST_CENTS / 100;
  const margin = subtotal + tax - totalCost;
  return (
    <div className="d-flex flex-column flex-md-row align-items-start">
      <div className="pl-0 order-2 order-md-1 col-auto d-flex align-items-center">
        <LockIcon fontSize="large" />
        <div className="d-flex flex-column">
          <b>Encrypted</b>
          <b>Messaging</b>
        </div>
      </div>
      <div className="mb-4 pr-0 col order-1 order-md-2">
        <div className="d-flex b-500">
          <span className="d-inline-block mr-2">Subtotal</span>
          <span className="ml-auto d-inline-block">{numeral(subtotal).format("$0,0.00")}</span>
        </div>
        <div className="d-flex">
          <span className="ml-auto d-inline-block">({messageCount} &times; {numeral(UNIT_PRICE_CENTS / 100).format("$0,0.00")})</span>
        </div>
        <div className="d-flex b-500">
          <span className="d-inline-block mr-2">Tax (10%)</span>
          <span className="ml-auto d-inline-block">{numeral(tax).format("$0,0.00")}</span>
        </div>
        <h6 className="d-flex h2">
          <span className="d-inline-block mr-2">TOTAL</span>
          <span className="ml-auto d-inline-block">{numeral(subtotal + tax).format("$0,0.00")}</span>
        </h6>
        <div className="d-flex">
          <span className="ml-auto d-inline-block">cost: {numeral(totalCost).format("$0,0.00")}</span>
        </div>
        <div className="d-flex">
          <span className="ml-auto d-inline-block">profit: {numeral(margin).format("$0,0.00")}</span>
        </div>
      </div>
    </div>
  );
}

export default PriceCalculation;
