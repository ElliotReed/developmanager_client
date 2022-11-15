import * as React from "react";

import Header from "./Header";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";
import MainPageWrapper from "components/common/MainPageWrapper";

import style from "./Layout.module.scss";

export default function Layout({ children }) {
  const siteTitle = process.env.REACT_APP_SITE_TITLE;
  const [isActive, setIsActive] = React.useState(false);

  return (
    <div className={style.siteWrapper}>
      <Header
        siteTitle={siteTitle}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <MainPageWrapper>{children}</MainPageWrapper>
      <Footer siteTitle={siteTitle} />
      <MobileMenu isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
}
