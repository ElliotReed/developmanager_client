import React from "react";

import Nav from "./Nav";
import Logo from "../shared/Logo/";

import styles from "./Header.module.scss";

import LoginRegister from "./LoginRegister";
import UserMenu from "./UserMenu";

import { IsAuthenticatedContextConsumer } from "services/authService/IsAuthenticatedContext";

const Header = ({
  siteTitle,
  isActive,
  setIsActive,
  // isAuthenticated,
  // setIsAuthenticated,
}) => {
  let hamburgerStyle = `${styles.hamburger} ${styles.hamburgerSqueeze} ${
    isActive ? styles.isActive : ""
  }`;

  return (
    <header className={styles.header}>
      <Logo siteTitle={siteTitle} />
      <div className={styles.mainNavWrapper}>
        <Nav />
        <IsAuthenticatedContextConsumer>
          {(context) =>
            context.isAuthenticated ? <UserMenu /> : <LoginRegister />
          }
        </IsAuthenticatedContextConsumer>
      </div>
      <button
        className={hamburgerStyle}
        type="button"
        onClick={() => setIsActive(!isActive)}
      >
        <span className={styles.hamburgerBox}>
          <span className={styles.hamburgerInner}></span>
        </span>
      </button>
    </header>
  );
};

export default Header;
