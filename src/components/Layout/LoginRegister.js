import React from "react";
import { Link } from "react-router-dom";

import styles from "./login-register.module.scss";

export default function LoginRegister() {
  return (
    <div className={styles.LoginRegister}>
      <div>
        <Link to="/auth/signin">Sign In</Link>
        <span>or</span>
        <Link to="/auth/create-account">Create Account</Link>
      </div>
    </div>
  );
}
