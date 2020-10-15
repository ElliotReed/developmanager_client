import React from 'react';

import styles from './button.module.scss';

export const Button = ({ type = 'button', disabled = false, children, onClick }) => {
	return (
		<button type={type} disabled={disabled} className={styles.button} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
