import PropTypes from 'prop-types';

import Heading from 'components/common/Heading';

import styles from "./Form.module.scss";

function FormHeader({ title = null, children }) {
  return (
    <header className={styles.FormHeader}>
      {title && <Heading level={2} className={styles.title}>{title}</Heading>}
      {children}
    </header>
  );
}

FormHeader.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element
}

function FormBody({ children }) {
  return <div className={styles.FormBody}>{children}</div>;
}

function FormFooter({ children }) {
  return <footer className={styles.FormFooter}>{children}</footer>;
}

export default function Form({ handleSubmit, children, name }) {
  return (
    <form id={name} name={name} className={styles.Form} onSubmit={handleSubmit}>
      {children}
    </form>
  );
}

Form.Header = FormHeader;
Form.Body = FormBody;
Form.Footer = FormFooter;
