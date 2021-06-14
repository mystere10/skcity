import React from "react";

const IncreaseDecreaseBtn = ({
  increaseQuantity,
  decreaseQuantity,
  quantity,
}) => {
  return (
    <div className="increase-decrease">
      <div
        className="sign-btn"
        id="decrease"
        onClick={decreaseQuantity}
        value="Decrease Value"
      >
        -
      </div>
      <div className="number">{quantity}</div>
      <div
        className="sign-btn"
        id="increase"
        onClick={increaseQuantity}
        value="Increase Value"
      >
        +
      </div>
    </div>
  );
};

export default IncreaseDecreaseBtn;
