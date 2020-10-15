import React, { useState } from 'react';
import config from '../../config/config.json';
import Header from './Header';
import Footer from './Footer';
import MobileMenu from './MobileMenu';
import MainPageWrapper from '../shared/MainPageWrapper';
import style from './Layout.module.scss';

const Layout = ({ children }) => {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className={style.siteWrapper}>
			<Header siteTitle={config.siteTitle} isActive={isActive} setIsActive={setIsActive} />
			<MainPageWrapper>{children}</MainPageWrapper>
			<Footer siteTitle={config.siteTitle} />
			<MobileMenu isActive={isActive} setIsActive={setIsActive} />
		</div>
	);
};

export default Layout;
