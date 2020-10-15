import React from "react";
import { Route, Redirect } from "react-router-dom";

import AuthService from 'services/AuthService.js'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      // user={value.user}
      {...rest}
      render={(props) => {
        // const loggedIn = auth.isAuthenticated();
        // if (!loggedIn) {
        if (!AuthService.isAuthenticated()) {
          return (
            <Redirect
              to={{ pathname: "/auth", state: { from: props.location } }}
            />
          );
        }
        return <Component {...props} />;
      }}
    />
  );
};

export default ProtectedRoute;
