import React from "react";
import { NavLink } from "react-router-dom";
import "./MainNavigation.css";

const MainNavigation = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/requests">Requests</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/payments">Payments</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
