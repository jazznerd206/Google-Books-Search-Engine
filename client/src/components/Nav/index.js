import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="/">
        <p>Google Books</p>
      </a>
      <a className="navbar-brand" href="/">
        <p>Search</p>
      </a>
      <a className="navbar-brand" href="/saved">
        <p>Saved</p>
      </a>
    </nav>
  );
}

export default Nav;
