// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {
  return (
    <header className="header">
      <Link to="/TrullaWeb" className="homeLink">
        <h2>Trulla HQ</h2>
      </Link>
      <nav>
        <ul className="nav">
          <li>
            <Link to="/TrullaWeb/zombies" className="navItem">
              Zombies
            </Link>
          </li>
          <li>
            <Link to="/TrullaWeb/servers" className="navItem">
              Serverid
            </Link>
          </li>
          <li>
            <Link to="/TrullaWeb/games" className="navItem">
              Party Games
            </Link>
          </li>
          <li>
            <Link to="/TrullaWeb/liira" className="navItem">
              Liira
            </Link>
          </li>
          <li>
            <Link to="/TrullaWeb/specs" className="navItem">
              PC Specs
            </Link>
          </li>
          <li>
            <Link to="/TrullaWeb/trulla" className="navItem">
              Trulla
            </Link>
          </li>
          <li>
            <Link to="/TrullaWeb/auth" className="navItem">
              Admin/Login/Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
