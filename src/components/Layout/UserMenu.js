import * as React from "react";
import classnames from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./user-menu.module.scss";

import { useAuth } from "libs/authentication/useAuth";

const UserMenu = () => {
  const auth = useAuth();
  const [displayMenu, setDisplayMenu] = React.useState(false);

  React.useEffect(() => {
    const hideUserMenu = () => {
      setDisplayMenu(false);
    };

    if (displayMenu) {
      window.addEventListener("click", hideUserMenu);
    }

    return () => {
      window.removeEventListener("click", hideUserMenu);
    };
  }, [displayMenu]);

  const setDisplayMenuTrue = () => {
    if (!displayMenu) {
      setDisplayMenu(true);
    }
  };

  return (
    <div className={styles.userMenu}>
      <div className={styles.logged}>
        <button className={styles.icon} onClick={setDisplayMenuTrue}>
          <FontAwesomeIcon icon={["fas", "user-circle"]} size="lg" />
        </button>
        <ul
          className={
            displayMenu ? classnames(styles.menu, styles.menuOpen) : styles.menu
          }
        >
          <li className={styles.user}>
            <div className={styles.email}>
              <FontAwesomeIcon icon={["fas", "user-circle"]} size="2x" />{" "}
              <p>{auth.user.email}</p>
            </div>
          </li>
          <li className={styles.signout} onClick={auth.logout}>
            <span>Sign Out</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserMenu;
