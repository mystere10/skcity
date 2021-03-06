import React from "react";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";

const CartProducts = (props) => {
  const { cart } = useSelector(({ cart }) => ({
    cart,
  }));

  return (
    <ListGroup className="cart-group">
      {cart !== undefined && (
        <ListGroup.Item variant="secondary">Sneaker Size</ListGroup.Item>
      )}
      {cart !== undefined &&
        cart.map((sneaker, key) => (
          <ListGroup.Item key={key}>{sneaker.size}</ListGroup.Item>
        ))}
    </ListGroup>
  );
};

export default CartProducts;
