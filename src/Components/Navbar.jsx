import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const links = [
  {
    to: "/",
    title: "Home",
    exact: true
  },
  {
    to: "/users",
    title: "Users",
    exact: true
  },
  {
    to: "/about",
    title: "About",
    exact: true
  }
];

function Navbar() {
  return (
    <div className={styles.navbar}>
      {links.map((item) => (
        <NavLink
          to={item.to}
          key={item.to}
          exact={item.exact}
          className={(isActive) =>
            `${styles.link} ${isActive ? " " + styles.selected : ""}`
          }
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
}

export default Navbar;
