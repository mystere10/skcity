import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const SneakerCard = ({ sneaker }) => {
  const { id } = sneaker;
  return (
    <Link
      to={{ pathname: `/details/${id}`, product: { id } }}
      style={{ textDecoration: "none" }}
    >
      <Card className="sneakerCard">
        <Card.Img variant="top" src={sneaker.picture} />
        <Card.Body className="text-muted">
          <Card.Title>{sneaker.model}</Card.Title>
          <div>{sneaker.brandName}</div>
          <div className="price">{sneaker.price}</div>
        </Card.Body>
        <Card.Footer className="cardFooter">
          <small className="text-muted">Released {sneaker.releaseDate}</small>
        </Card.Footer>
      </Card>
    </Link>
  );
};

export default SneakerCard;
