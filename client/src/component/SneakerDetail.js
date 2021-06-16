import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handleSingleSneaker } from "../Redux/actions/sneakers";
import IncreaseDecreaseBtn from "./IncreaseDecreaseBtn";
import { functionHandleSetUserCart } from "../Redux/actions/sneakers";
import ReusableBtn from "./ReusableBtn";

const SneakerDetail = (props) => {
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    handleSingleSneaker(props.match.params.id)(dispatch);
  }, []);

  const { singleSneaker } = useSelector(({ singleSneaker }) => ({
    singleSneaker,
  }));

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity >= 1) setQuantity(quantity - 1);
  };

  const addToCart = (sneakerSize) => {
    if (!cart.includes(sneakerSize)) setCart(cart.concat(sneakerSize));
  };

  useEffect(() => {
    functionHandleSetUserCart(cart)(dispatch);
  }, [cart]);

  console.log(cart);

  return (
    <div className="container">
      <div className="card mb-3" style={{ maxWidth: "33.75rem !important" }}>
        {singleSneaker && (
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src="http://localhost:5000/assets/products/images/1623524035645-air-max-270-mens-shoe-KkLcGR.jpeg"
                className="card-img"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title card-details">
                  {singleSneaker.data[0].model}
                </h5>
                <div className="price">{singleSneaker.data[0].price}</div>
                <IncreaseDecreaseBtn
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                  quantity={quantity}
                />
                <div className="card-text">
                  <p className="size-block-title">Size in stock</p>
                  {singleSneaker.data[0].sizes.map((sneaker, key) => (
                    <div
                      key={key}
                      className="size-stock"
                      onClick={() =>
                        addToCart({
                          ...sneaker,
                          price: singleSneaker.data[0].price,
                        })
                      }
                    >
                      <span>{`${sneaker.size}: ${sneaker.quantity}`}</span>
                    </div>
                  ))}
                </div>
                <Link to="/checkout">
                  <ReusableBtn text="Checkout" />
                </Link>
                <p className="card-text">
                  <small className="text-muted">
                    Release date: {singleSneaker.data[0].releaseDate}
                  </small>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SneakerDetail;
