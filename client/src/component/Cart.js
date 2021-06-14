import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const { cart } = useSelector(({ cart }) => ({
    cart,
  }));

  return (
    <>
      <FontAwesomeIcon icon={faShoppingCart} size="sm"></FontAwesomeIcon>
      <span className="badge badge-warning" id="lblCartCount">
        {!cart ? 0 : cart.length}
      </span>
    </>
  );
};

export default Cart;
