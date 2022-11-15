import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import styles from './Logo.module.scss'

export default function Logo({ siteTitle, smallDisplay = false }) {
	const displayClass = smallDisplay ? styles.smallDisplay : null

	return (
		<LogoLink>
			<span className={displayClass}>
				{siteTitle}
			</span>
		</LogoLink>
	)
}

function LogoLink({ children }) {
	return (
		<Link className={styles.logo} to="/">
			<FontAwesomeIcon className={styles.icon} icon='fa-solid fa-laptop-code' size='lg' />
			{children}
		</Link>
	)
}
