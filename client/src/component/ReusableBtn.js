import React from "react";
import { Button } from "react-bootstrap";

const ReusableBtn = ({ text }) => {
  return (
    <div>
      <Button variant="secondary" className="checkout-btn">
        {text}
      </Button>
    </div>
  );
};

export default ReusableBtn;
