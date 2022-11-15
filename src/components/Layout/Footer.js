import PropTypes from "prop-types";

import MaxWidthContainer from "../common/MaxWidthContainer";
import CurrentDateTime from "../common/datetime/CurrentDateTime";
// import SocialLinks from '../common/SocialLinks';
import styles from "./Footer.module.scss";

export default function Footer({ siteTitle }) {
  return (
    <footer className={styles.footer}>
      <MaxWidthContainer>
        <div className={styles.container}>
          <div className={styles.attribution}>
            <div>
              © {new Date().getFullYear()} by {siteTitle}
            </div>
            <div className={styles.webAuthor}>
              <cite>
                Website by
                <a href="https://www.elliotreed.net/developer"> Elliot Reed</a>
              </cite>
            </div>
          </div>
          <CurrentDateTime updateBy={{ minute: true }} />
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
