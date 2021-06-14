import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sneaker.css";
import NavBar from "./NavBar";
import Display from "./Display";
import SneakerDetail from "./SneakerDetail";
import UserCart from "./UserCart";
import Footer from "./Footer";
import Checkout from "./Checkout";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Container>
          <NavBar />
        </Container>
        <Switch>
          <Route exact path="/" component={Display} />
          <Route exact path="/details/:id" component={SneakerDetail} />
          <Route exact path="/cart" component={UserCart} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
