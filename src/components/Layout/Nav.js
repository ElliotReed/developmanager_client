import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Nav.module.scss";

const Nav = ({ background }) => (
  <nav className={background ? styles.backgroundNav : styles.nav}>
    <ul>
      <li>
        <NavLink to="/projects" className={({ isActive }) => isActive ? styles.active : undefined}>
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? styles.active : undefined}>
          Dashboard
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
