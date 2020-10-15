import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";

import styles from "./user-menu.module.scss";
import AuthService from "services/AuthService";
const UserMenu = () => {
  // const [loading, setLoading] = useState(false);
  // const [data, setData] = useState();
  const [displayMenu, setDisplayMenu] = React.useState(false);

  async function logout() {
    AuthService.postLogout();
  }

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

  // useEffect(() => {
  //   setLoading(true); // ????? loading? here to keep varaible error
  //   console.log("auth: ", auth);
  //   setData({ me: auth.me });
  //   setLoading(false); // ????? loading?
  // }, [auth.isAuthenticated]);

  const setDisplayMenuTrue = () => {
    if (!displayMenu) {
      setDisplayMenu(true);
    }
  };

  return (
    <div className={styles.userMenu}>
      {/* {loading && null} */}

      {/* {data && data.me && ( */}
      {AuthService.isAuthenticated() && (
        <div className={styles.logged}>
          <button className={styles.icon} onClick={setDisplayMenuTrue}>
            <FontAwesomeIcon icon={["fas", "user-circle"]} size="lg" />
          </button>
          <ul
            className={
              displayMenu
                ? classnames(styles.menu, styles.menuOpen)
                : styles.menu
            }
          >
            <li className={styles.user}>
              <div className={styles.email}>
                <FontAwesomeIcon icon={["fas", "user-circle"]} size="lg" />{" "}
                {/* {data.me.email} */}
                {`elliotthebomb@somewhere.com`}
              </div>
            </li>
            {/* {!loading && data && data.me && ( */}
            {/* {!loading && auth.isAuthenticated && ( */}
            {AuthService.isAuthenticated() && (
              <li className={styles.signout} onClick={logout}>
                <span>Sign Out</span>
              </li>
            )}
          </ul>
        </div>
      )}
      {/* {data && !data.me && ( */}
      {!AuthService.isAuthenticated() && (
        <div className={styles.signin}>
          <Link to="/auth/signin">Sign In</Link>
          <span>or</span>
          <Link to="/auth/create-account">Create Account</Link>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
