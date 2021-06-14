import React, { useEffect } from "react";
import { handleGetSneakers } from "../Redux/actions/sneakers";
import { useDispatch, useSelector } from "react-redux";
import { CardGroup, Card, Container, CardDeck } from "react-bootstrap";
import SneakerCard from "./SneakerCard";

const Display = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    handleGetSneakers()(dispatch);
  }, []);

  const { data } = useSelector(({ data }) => ({ data }));
  return (
    <div className="container">
      <div className="row">
        {data &&
          data.map((sneaker) => (
            <div className="col-sm-3" key={sneaker.id}>
              <SneakerCard sneaker={sneaker} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Display;
