import React from "react";
import { Route, Redirect } from "react-router-dom";

import { userContext } from "../../../user-context";
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <userContext.Consumer>
      {(value) => (
        <Route
          // user={value.user}
          {...rest}
          render={(props) => {
            // const loggedIn = auth.isAuthenticated();
            // if (!loggedIn) {
            if (!value.user.isAuthenticated) {
              return (
                <Redirect
                  to={{ pathname: "/auth", state: { from: props.location } }}
                />
              );
            }
            return <Component {...props} />;
          }}
        />
      )}
    </userContext.Consumer>
  );
};

export default PrivateRoute;
