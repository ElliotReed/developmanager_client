import cn from "classnames";

import styles from "./Button.module.scss";

export default function Button({
  title = "",
  type = "button",
  disabled = false,
  children,
  onClick,
  bgColor = styles.primary,
}) {
  return (
    <button
      title={title}
      type={type}
      disabled={disabled}
      className={cn(styles.button, bgColor)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
