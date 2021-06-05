import { useEffect, useState } from "react";
import { BrowserRouter as Router, Redirect } from "react-router-dom";

import Layout from "components/Layout";
import RouterConfig from "routers/RouterConfig";
import PublicRouterConfig from "routers/PublicRouterConfig";

import AuthService from "services/authService/AuthService";

export default function App({ isAuthenticated, setIsAuthenticated }) {
  const initialize = async () => {
    AuthService.initializeTokens()
      .then((statusText) => {
        if (statusText === "OK") {
          // console.log("statusText: ", statusText);
          setIsAuthenticated(true);
          // TODO redirect on refresh?
        }
      })
      .catch((err) => {
        console.log(err.message);
        setIsAuthenticated(false);
        console.log("isAuthenticated error: ", isAuthenticated);
      });
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <Router>
      {!isAuthenticated ? (
        <Redirect to="/" /> && (
          <Layout>
            <PublicRouterConfig />
          </Layout>
        )
      ) : (
        <Layout>
          <RouterConfig />
        </Layout>
      )}
    </Router>
  );
}
