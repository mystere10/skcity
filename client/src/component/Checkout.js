import React from 'react';
import { useSelector } from 'react-redux';
import CartSummary from './CartSummary';
import CartProducts from './CartProducts';
import Empty from './Empty';

const Checkout = () => {
  const { cart } = useSelector(({ cart }) => ({
    cart,
  }));
  return (
    <div className="container">
      <div className="card md-3" style={{ maxWidth: '33.75rem !important' }}>
        <div className="row no-gutters">
          <div className="col">
            <CartProducts />
          </div>
          <div className="col">{cart !== undefined && <CartSummary />}</div>
        </div>
      </div>
      <div>{cart === undefined && <Empty />}</div>
    </div>
  );
};

export default Checkout;
