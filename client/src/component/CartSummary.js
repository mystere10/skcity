import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Flutterwave from "./Flutterwave";

const CartSummary = () => {
  const { cart } = useSelector(({ cart }) => ({
    cart,
  }));

  const prices = [];
  let total;
  if (cart !== undefined) {
    cart.map((sneaker) => {
      prices.push(sneaker.price.split("$")[1]);
    });
  }
  if (prices.length > 0) {
    let temp = 0;
    prices.map((price) => {
      temp += parseInt(price);
    });
    total = temp;
  }

  return (
    <div className="order-summary">
      <p>
        <span>Subtotal</span>
        <span className="align-span">RWF {total}</span>
      </p>
      <p>
        <span>Delivery fee</span>
        <span className="align-span">RWF 100</span>
      </p>
      <p>
        <span>Estimated delivery time</span>
        <span className="align-span">24 Hours</span>
      </p>
      <hr className="summary-divider" />
      <p>
        <span>Total</span>
        <span className="align-span">RWF {total + 100}</span>
      </p>
      {/* <button className="style.checkOutbutton">GO TO PAYMENT</button> */}
      <Flutterwave />
    </div>
  );
};

export default CartSummary;
