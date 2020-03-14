import React from "react";
import { NavLink, Link, BrowserRouter as Router } from "react-router-dom";
import "./NavWrapper.css";

const NavWrapper = props => {
  return (
    <div>
      {props.products.map(product => (
        <NavLink
          className="nav-item"
          activeClassName="nav-item-active"
          key={product.category}
          to={product.category}
        >
          {product.category}
        </NavLink>
      ))}
    </div>
  );
};

export default NavWrapper;
