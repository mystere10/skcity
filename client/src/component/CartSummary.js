import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Flutterwave from "./Flutterwave";

const CartSummary = () => {
  return (
    <div className="order-summary">
      <p>
        <span>Subtotal</span>
        <span className="align-span">R 11</span>
      </p>
      <p>
        <span>Delivery fee</span>
        <span className="align-span">R 33</span>
      </p>
      <p>
        <span>Estimated delivery time</span>
        <span className="align-span">24 Hours</span>
      </p>
      <hr className="summary-divider" />
      <p>
        <span>Total</span>
        <span className="align-span">R 333</span>
      </p>
      {/* <button className="style.checkOutbutton">GO TO PAYMENT</button> */}
      <Flutterwave />
    </div>
  );
};

export default CartSummary;
