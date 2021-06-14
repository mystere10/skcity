import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-copyright text-center py-3">
      © 2020 Copyright:
      <Link to="/" style={{ textDecoration: "none" }}>
        <span className="brandNameSneaker">Sneaker</span>{" "}
        <span className="brandNameCity">City</span>
      </Link>
    </div>
  );
};

export default Footer;
