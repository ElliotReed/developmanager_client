import React from 'react';
import Logo from '../../shared/Logo';

import styles from './home.module.scss';

const siteTitle = process.env.REACT_APP_SITE_TITLE;
const Dashboard = () => {
	return (
		<div className={styles.Dashboard}>
			<div className={styles.jumbotron}>
				<div className={styles.head}>
					<Logo siteTitle={siteTitle} />
				</div>
				<div className={styles.body}>
					<p>
						<b>Develop Manager</b> is a tool to help organize your development projects
					</p>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
