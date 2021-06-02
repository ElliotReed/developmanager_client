import { useEffect, useState } from "react";
import { BrowserRouter as Router, Redirect } from "react-router-dom";

import Layout from "components/Layout";
import RouterConfig from "navigation/RouterConfig";
import PublicRouterConfig from "navigation/PublicRouterConfig";

import AuthService from "services/authService/AuthService";

export default function App({ isAuthenticated, setIsAuthenticated }) {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const initialize = async () => {
    AuthService.initializeTokens()
      .then((statusText) => {
        if (statusText === "OK") {
          // console.log("statusText: ", statusText);
          setIsAuthenticated(true);
          // TODO redirect on refresh?
          // setShouldRedirect(true);
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
      {shouldRedirect && <Redirect to="/dashboard" />}
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
