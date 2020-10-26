import React from "react";

import "./NavigationBar.css";

import { NavLink } from "react-router-dom";

// This is a basic class
// You can check out this link for more info:
// https://javascript.info/class
class PageName {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
}

// This ordering is maintained,
// meaning it will render in this order
const pages = [
  new PageName("Home Page", "/home-page"),
  new PageName("Forum", "/forum"),
  new PageName("Calendar", "/calendar"),
  new PageName("News Hub", "/news-hub"),
  new PageName("Group Finder", "/group-finder"),
  new PageName("About Us", "/about-us"),
  new PageName("User Profile", "/user-profile"),
];

const activeClassName = "nav-link-active";

function NavigationBar(props) {
  const navLinks = pages.map((page) => {
    return (
      <NavLink key={page.url} to={page.url} activeClassName={activeClassName}>
        {page.name}
      </NavLink>
    );
  });

  return (
    <nav>
      {navLinks}
      <a
        href={`http://localhost:${
          process.env.PORT ? process.env.PORT : 3005
        }/api/oauth2/login`}
      >
        Login with Discord
      </a>
    </nav>
  );
}

export default NavigationBar;
