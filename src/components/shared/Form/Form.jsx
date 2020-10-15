import React, { ReactNode } from 'react';

import styles from './form.module.scss';

import Button from 'components/shared/Button';

const Form = ({ handleSubmit, title, text, children, footer }) => {
	return (
		<form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
			<h3>{title}</h3>
			{children}
			<Button>{text}</Button>
			{footer}
		</form>
	);
};

export default Form;
