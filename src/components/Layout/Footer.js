import React from 'react';
import PropTypes from 'prop-types';

import MaxWidthContainer from '../shared/MaxWidthContainer';
import CurrentTime from '../shared/CurrentTime/';
// import SocialLinks from '../shared/SocialLinks';
import styles from './Footer.module.scss';

export default function Footer({ siteTitle }) {
	return (
		<footer className={styles.footer}>
			<MaxWidthContainer>
				<div className={styles.container}>
					{/* <SocialLinks /> */}
					<section className={styles.attribution}>
						<div>
							© {new Date().getFullYear()} by {siteTitle}
						</div>
						<div className={styles.webAuthor}>
							<cite>
								Website by
								<a href="https://www.elliotreed.net/developer"> Elliot Reed</a>
							</cite>
						</div>
					</section>
					<CurrentTime />
				</div>
			</MaxWidthContainer>
		</footer>
	);
}

Footer.propTypes = {
	siteTitle: PropTypes.string,
};

Footer.defaultProps = {
	siteTitle: ``,
};
