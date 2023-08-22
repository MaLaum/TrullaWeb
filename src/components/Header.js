// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {
  return (
    <header className="header">
      <h2>Trulla HQ</h2>
      <nav>
        <ul className="nav">
          <li>
            <Link to="/TrullaWeb/zombies" className="navItem">
              Zombies
            </Link>
          </li>
          <li>
            <Link to="/TrullaWeb" className="navItem">
              PC Specs
            </Link>
          </li>
          <li>
            <Link to="/TrullaWeb" className="navItem">
              Trulla
            </Link>
          </li>
          <li>
            <Link to="/TrullaWeb/admin" className="navItem">
              TBD
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
