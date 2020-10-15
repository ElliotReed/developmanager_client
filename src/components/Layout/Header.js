import React from "react";
// import { Redirect } from 'react-router-dom';
// import { userContext } from "../../user-context";

import Nav from "./Nav";
import Logo from "../shared/Logo/";
// import Button from '../shared/Button';

import styles from "./Header.module.scss";

// import { postLogout } from '../../api';
import UserMenu from "./UserMenu";

const Header = ({ siteTitle, isActive, setIsActive }) => {
  let hamburgerStyle = `${styles.hamburger} ${styles.hamburgerSqueeze} ${
    isActive ? styles.isActive : ""
  }`;

  // const logout = async (e) => {
  // const loggedOut = await postLogout(e);
  // if (loggedOut) return <Redirect to="/" />;
  // };

  return (
    <header className={styles.header}>
      <Logo siteTitle={siteTitle} />
      <div className={styles.mainNavWrapper}>
        <Nav />
        {/* <userContext.Consumer>
          {(value) => <UserMenu value={value} />}
        </userContext.Consumer> */}
        <UserMenu />
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
