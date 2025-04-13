import React from 'react';
import "./Navbar.scss";
import  logo from "../../logo.png";

export default function navbar() {
  return (
    <nav className='navbar'>
      <img className="nav-logo" src={logo} alt="city tours logo" />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">Home</a>
        </li>

        <li>
          <a href="/" className="nav-link">About</a>
        </li>

        <li>
          <a href="/" className="nav-link active ">Tours</a>
        </li>
      </ul>
    </nav>
  )
}

