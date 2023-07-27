import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div >
        <div className="navbar-size">

        <nav className="navbar navbar-expand-lg bg-dark">
          <Link className="navbar-brand" to="/">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzQ4y-esOsZR37yd1z5MadM3MPOGyLAslK8I7F9eCNKg&s" alt="loading" height="50px" /> My Website
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/menu">Menu</Link>
            </li>
            
          </ul>
        </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
