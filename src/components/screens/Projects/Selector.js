import React from 'react';
import { Link } from 'react-router-dom';

import LoadingSpinner from '../../shared/LoadingSpinner';

import styles from './Slelector.module.scss';

const Selector = ({ projects = [], loading }) => {
	return (
		<nav className={styles.Selector}>
			<header>Projects</header>
			<ul>
				{loading ? <LoadingSpinner /> : null}
				{projects.length >= 1 && projects.map((project) => {
					return (
						<li key={project.id}>
							<Link to={`/projects/${project.id}`}>{project.name}</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Selector;
