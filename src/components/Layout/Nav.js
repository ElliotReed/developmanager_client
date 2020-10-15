import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Nav.module.scss';

const Nav = ({ background }) => (
	<nav className={background ? style.backgroundNav : style.nav}>
		<ul>
			<li>
				<NavLink to="/projects" activeClassName={style.active}>
					Projects
				</NavLink>
			</li>
		</ul>
	</nav>
);

export default Nav;
