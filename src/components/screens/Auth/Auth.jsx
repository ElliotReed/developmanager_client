import React from "react";

import Button from "../../shared/Button";
import LoadingSpinner from "../../shared/LoadingSpinner";
import MaxWidthContainer from "../../shared/MaxWidthContainer";

import styles from "./auth.module.scss";

import AuthService from 'services/AuthService.js'

const Auth = () => {
  const [changed, setChanged] = React.useState(false);
  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = React.useState(false);

   async function login(body) {
    setLoading(true);
    AuthService.postLogin(body).then(data => {
      const accessToken = data.token;
      if (accessToken) {
        AuthService.setAccessToken(accessToken)
        // value.setUser({ accessToken: accessToken, isAuthenticated: true });
      }
      setLoginData({ email: "", password: "" });
    }).catch((err) => {
      console.log(err)
    })
    setLoading(false);
  };

  function handleChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setLoginData({ ...loginData, [name]: value });

    setChanged(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    login(loginData);

    // Here to remove warnings
    if (changed) {
    }
    console.log("submited: ", loginData);
  }

  return (
    <div className={styles.Auth}>
      {loading ? <LoadingSpinner /> : null}

      <h1>Auth</h1>
      <MaxWidthContainer>
        <form className={styles.form} onSubmit={handleSubmit}>
          <p>Sign In</p>
          <label>
            email
            <input
              name="email"
              type="email"
              value={loginData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            password
            <input
              name="password"
              type="password"
              value={loginData.password}
              onChange={handleChange}
            />
          </label>
          <Button type="submit">Sign In</Button>
        </form>
      </MaxWidthContainer>
    </div>
  );
};

export default Auth;
