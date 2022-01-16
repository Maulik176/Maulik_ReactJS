import React from "react";
import "./Navbar.css";
import { AiFillCustomerService } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <AiFillCustomerService className="logo" />
      <div className="links">
        <Link className="navigationLink" to="/">
          Home
        </Link>
        <Link className="navigationLink" to="/contact">
          Contact
        </Link>
        <Link className="navigationLink" to="/get-help">
          Help
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
