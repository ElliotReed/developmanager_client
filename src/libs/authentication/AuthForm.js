import * as React from "react";

import { useAuth } from "./useAuth";

const initialState = {
  email: "",
  password: "",
};

export default function AuthForm({ mode }) {
  const auth = useAuth();
  const [authData, setAuthData] = React.useState(initialState);
  const modeText = mode === "login" ? "sign in" : "create account";

  function handleChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setAuthData({ ...authData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (mode === "login") {
      auth.login(authData);
    }

    if (mode === "register") {
      auth.register(authData);
    }

    setAuthData(initialState);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>{modeText}</p>
      <label htmlFor="email">email</label>
      <input
        name="email"
        type="email"
        value={authData.email}
        onChange={handleChange}
      />
      <label htmlFor="password">password</label>
      <input
        name="password"
        type="password"
        value={authData.password}
        onChange={handleChange}
      />
      <input type="submit" value={modeText} />
    </form>
  );
}
