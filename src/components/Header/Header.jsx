import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LogoLink from "./LogoLink";
import Navigation from "./Navigation";
import OffscreenContainer from "components/common/OffscreenContainer";
import UserMenu from "../Layout/UserMenu";

import styles from "./header.module.scss";

export const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.buttonLogoContainer}>
        <button
          className={styles.menuButton}
          onClick={() => {
            setShowMobileNav(true);
          }}
        >
          <FontAwesomeIcon icon={["fas", "bars"]} />
        </button>
        <LogoLink />
      </div>
      <div className={styles.navUserContainer}>
        <div className={styles.mainNav}>
          <Navigation />
        </div>
        <UserMenu />
      </div>
      <OffscreenContainer
        isVisible={showMobileNav}
        handleOffscreenContainer={() => setShowMobileNav(false)}
      >
        <div className={styles.logoWrapper}>
          <LogoLink />
        </div>
        <Navigation
          alignVerticle={true}
          handleOffscreenContainer={() => setShowMobileNav(false)}
        />
      </OffscreenContainer>
    </header>
  );
};
