import React from "react";
import CartSummary from "./CartSummary";
import CartProducts from "./CartProducts";

const Checkout = () => {
  return (
    <div className="container">
      <div className="card mb-3" style={{ maxWidth: "33.75rem !important" }}>
        <div className="row no-gutters">
          <div className="col-md-8">
            <CartProducts />
          </div>
          <div className="col-md-4">
            <CartSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
