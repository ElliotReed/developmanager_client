import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import * as React from "react";

import { useAuth } from "libs/authentication/useAuth";
import { useOutsideClick } from "hooks/useOutsideClick";

import styles from "./UserMenu.module.scss";

export default function UserMenu() {
  const auth = useAuth();
  const [shouldDisplayMenu, setShouldDisplayMenu] = React.useState(false);

  const hideUserMenu = () => {
    setShouldDisplayMenu(false);
  };

  const ref = useOutsideClick(hideUserMenu);

  const toggleDisplayMenu = () => {
    setShouldDisplayMenu(prev => !prev);
  };

  return (
    <UserMenuWrapper>
      <UserMenuToggle ref={ref} onClick={toggleDisplayMenu} />
      <UserMenuList shouldDisplayMenu={shouldDisplayMenu}>
        <UserEmail auth={auth} />
        <UserSignOut auth={auth} />
      </UserMenuList>
    </UserMenuWrapper>
  );
};

const UserMenuToggle = React.forwardRef((props, ref) => (
  <button ref={ref} className={styles.icon} onClick={props.onClick}>
    <FontAwesomeIcon icon={["fas", "user-circle"]} size="lg" />
  </button>
));

function UserMenuWrapper({ children }) {
  return (
    <div className={styles.userMenu}>
      {children}
    </div>
  )
}
function UserMenuList({ shouldDisplayMenu, children }) {
  return (
    <ul
      className={
        shouldDisplayMenu ? classnames(styles.menu, styles.menuOpen) : styles.menu
      }
    >
      {children}
    </ul>
  );
}
function UserSignOut({ auth }) {
  return (
    <li className={styles.signout} onClick={auth.logout}>
      <span>Sign Out</span>
    </li>
  );
}
function UserEmail({ auth }) {
  return (
    <li className={styles.user}>
      <div className={styles.email}>
        <FontAwesomeIcon icon={["fas", "user-circle"]} size="2x" />{" "}
        <p>{auth.user.email}</p>
      </div>
    </li>
  );
}