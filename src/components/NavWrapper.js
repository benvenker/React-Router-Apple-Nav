import React from "react";
import { NavLink, Link, BrowserRouter as Router } from "react-router-dom";
import "./NavWrapper.css";

const NavWrapper = props => {
  return (
    <div>
      {props.products.map(product => (
        <a key={product.category} href={product.category}>
          {product.category}
        </a>
      ))}
    </div>
  );
};

export default NavWrapper;
