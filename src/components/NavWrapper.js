import React from "react";
import { NavLink, Link, BrowserRouter as Router } from "react-router-dom";
import "./NavWrapper.css";

const NavWrapper = () => {
  return (
    <div>
      <Router>
        <nav>
          <NavLink
            className="nav-item"
            activeClassName="active-nav-item"
            to="/"
          >
            Logo
          </NavLink>
          <NavLink
            className="nav-item"
            activeClassName="active-nav-item"
            to="/mac"
          >
            Mac
          </NavLink>
          <NavLink
            className="nav-item"
            activeClassName="active-nav-item"
            to="/ipad"
          >
            iPad
          </NavLink>
          <NavLink
            className="nav-item"
            activeClassName="active-nav-item"
            to="/iphone"
          >
            iPhone
          </NavLink>
          <NavLink
            className="nav-item"
            activeClassName="active-nav-item"
            to="/watch"
          >
            Watch
          </NavLink>
          <NavLink
            className="nav-item"
            activeClassName="active-nav-item"
            to="/tv"
          >
            TV
          </NavLink>
          <NavLink
            className="nav-item"
            activeClassName="active-nav-item"
            to="/music"
          >
            Music
          </NavLink>
          <NavLink
            className="nav-item"
            activeClassName="active-nav-item"
            to="/support"
          >
            Support
          </NavLink>
          <NavLink
            className="nav-item"
            activeClassName="active-nav-item"
            to="/search"
          >
            Search
          </NavLink>
          <NavLink
            className="nav-item"
            activeClassName="active-nav-item"
            to="/cart"
          >
            Cart
          </NavLink>
        </nav>
      </Router>
    </div>
  );
};

export default NavWrapper;
