import PropTypes from "prop-types";

import MaxWidthContainer from "../common/MaxWidthContainer";
import CurrentTime from "../common/datetime/CurrentTime";
// import SocialLinks from '../common/SocialLinks';
import styles from "./Footer.module.scss";

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
          <CurrentTime updateBy="minute" />
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
