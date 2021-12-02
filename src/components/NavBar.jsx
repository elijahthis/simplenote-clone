import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <p id="web-title">Simplenote</p>

      <div className="links">
        <ul>
          <li>
            <Link to="">Contact Us</Link>
          </li>
          <li>
            <Link to="">Help</Link>
          </li>
          <li>
            <Link to="">Blog</Link>
          </li>
        </ul>
        <div>
          <Link to="">Log In</Link>
          <Link to="">Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
