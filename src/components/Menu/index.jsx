import React from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={e => setMenuOpen(!menuOpen)}>
          <Link to="/dashboard">Pratice</Link>
        </li>
        <li onClick={e => setMenuOpen(!menuOpen)}>
          <Link to="/certifications">Certification</Link>
        </li>
        <li onClick={e => setMenuOpen(!menuOpen)}>
          <Link to="/compete">Compete</Link>
        </li>
        <li onClick={e => setMenuOpen(!menuOpen)}>
          <Link to="leader-board">Leaderboard</Link>
        </li>
      </ul>
      <ul>
        <li onClick={e => setMenuOpen(!menuOpen)}>
          <Link to="/dashboard">Profile</Link>
        </li>
        <li onClick={e => setMenuOpen(!menuOpen)}>
          <Link to="/certifications">Leaderboard</Link>
        </li>
        <li onClick={e => setMenuOpen(!menuOpen)}>
          <Link to="/compete">Bookmarks</Link>
        </li>
        <li onClick={e => setMenuOpen(!menuOpen)}>
          <Link to="leader-board">Settings</Link>
        </li>
      </ul>
      <ul>
        <li onClick={e => setMenuOpen(!menuOpen)}>
          <Link to="/dashboard">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
