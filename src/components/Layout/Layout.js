import * as React from "react";

import Header from "./Header";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";
import MainPageWrapper from "components/common/MainPageWrapper";

import style from "./Layout.module.scss";

export default function Layout({ children }) {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <div className={style.siteWrapper}>
      <Header
        siteTitle={process.env.siteTitle}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <MainPageWrapper>{children}</MainPageWrapper>
      <Footer siteTitle={process.env.siteTitle} />
      <MobileMenu isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
}
