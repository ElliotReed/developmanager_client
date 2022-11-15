import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Nav.module.scss";

const NavPublic = ({ background }) => (
  <nav className={background ? styles.backgroundNav : styles.nav}>
    <ul>
      <li>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : undefined}>
          Home
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default NavPublic;
