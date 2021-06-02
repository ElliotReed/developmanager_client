import React from "react";
import { Redirect } from "react-router-dom";
import classnames from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoadingSpinner from "components/common/LoadingSpinner";

import styles from "./user-menu.module.scss";

import AuthService from "services/authService/AuthService";
import UserService from "services/UserService";

import { IsAuthenticatedContextConsumer } from "services/authService/IsAuthenticatedContext";

const UserMenu = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [userData, setUserData] = React.useState({
    email: "email@example.com",
  });
  const [displayMenu, setDisplayMenu] = React.useState(false);
  const [shouldRedirect, setShouldRedirect] = React.useState(false);

  async function logout(setIsAuthenticated) {
    AuthService.postLogout()
      .then((data) => {
        if (data) {
          setShouldRedirect(true);
          setIsAuthenticated(false);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  async function getUserData() {
    setIsLoading(true);
    UserService.getUserById()
      .then((data) => {
        setUserData(data);
      })
      .catch((err) => {
        console.log("err.message: ", err.message);
      });
    setIsLoading(false);
  }

  React.useEffect(() => {
    getUserData();
  }, []);

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
      {shouldRedirect && <Redirect to="/" />}
      <div className={styles.logged}>
        <button className={styles.icon} onClick={setDisplayMenuTrue}>
          <FontAwesomeIcon icon={["fas", "user-circle"]} size="xs" />
        </button>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
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
                <p>{userData.email}</p>
              </div>
            </li>
            <IsAuthenticatedContextConsumer>
              {(context) => (
                <li
                  className={styles.signout}
                  onClick={() => logout(context.setIsAuthenticated)}
                >
                  <span>Sign Out</span>
                </li>
              )}
            </IsAuthenticatedContextConsumer>
          </ul>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
