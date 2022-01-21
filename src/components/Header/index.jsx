import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Search,
  ChatBubbleOutline,
  Notifications,
  Person
} from "@mui/icons-material";
import "./Header.scss";

const Header = ({ setMenuOpen, menuOpen }) => {
  const [focus, setFocus] = useState(false);
  return (
    <div className="header">
      <div className="header__one">
        <div className="header__oneLeft">
          <div className={"header__left " + (menuOpen && "active")}>
            <div
              className="header__hamburger"
              onClick={e => setMenuOpen(!menuOpen)}
            >
              <span className="header__hamburgerLine1"></span>
              <span className="header__hamburgerLine2"></span>
              <span className="header__hamburgerLine3"></span>
            </div>
          </div>
          <div className="header__logo">
            <Link to="/dashboard">HackerRank</Link>
          </div>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "header__activeLink" : "")}
          >
            <div className="header__list">PRACTICE</div>
          </NavLink>{" "}
          <NavLink
            to="/certifications"
            className={({ isActive }) => (isActive ? "header__activeLink" : "")}
          >
            <div className="header__list">CERTIFICATION</div>
          </NavLink>{" "}
          <NavLink
            to="/compete"
            className={({ isActive }) => (isActive ? "header__activeLink" : "")}
          >
            <div className="header__list">COMPETE</div>
          </NavLink>
          <NavLink
            to="/leader-board"
            className={({ isActive }) => (isActive ? "header__activeLink" : "")}
          >
            <div className="header__list">LEADERBOARD</div>
          </NavLink>
        </div>
        <div className="header__oneRight">
          <div className="header__search">
            <Search className="header__searchInputIcon" />
            <input
              type="text"
              className="header_searchInput"
              placeholder="Search"
            />
          </div>
          <ChatBubbleOutline className="header__msg" />
          <Notifications className="header__noti" />
          <div className="header__userInfo">
            <Person />
            ktkhaing47
          </div>
        </div>
      </div>
      <div className="header__two"></div>
    </div>
  );
};

export default Header;
