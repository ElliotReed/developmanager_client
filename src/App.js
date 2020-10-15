import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Auth from "components/screens/Auth";
import Dashboard from "components/screens/Dashboard";
import Layout from "components/Layout";
import Projects from "components/screens/Projects";
import Project from "components/screens/Projects//Project";
import ProtectedRoute from "./components/shared/ProtectedRoute";
// import PrivateRoute from "./components/shared/PrivateRoute";

import AuthService from 'services/AuthService'
import "utils/fontawesome";

// import { userContext } from "./user-context";

function App() {
  // const [user, setUser] = React.useState({
  //   accessToken: "",
  //   isAuthenticated: false,
  // });

  // function logout() {
  //   const response = api.postLogout();
  //   if (response) {
  //     // setUser({ accessToken: "", isAuthenticated: false });
  //   }
  // }

  const initialize = async () => {
    AuthService.initializeTokens().then((data) => {
      const accessToken = data.token;
      if (accessToken) {
        AuthService.setAccessToken(accessToken);
        // setUser({ accessToken: accessToken, isAuthenticated: true });
      }
    }).catch((err) => {
      console.log(err)
    })
  };

  function getAuth() {
    console.log("AuthService.isAuthenticated(): ", AuthService.isAuthenticated());
  }

  useEffect(() => {
    // console.log("userContext: ", userContext);
    initialize();
  }, []);

  React.useEffect(() => {
    getAuth();
  });

  // const value = {
  //   user: user,
  //   logoutUser: logout,
  //   setUser: setUser,
  // };

  return (
    <Router>
      {/* <userContext.Provider value={value}> */}
      <Layout>
        <Switch>
          <ProtectedRoute
            path="/projects/:projectId"
            children={({ match }) => (
              <Projects>
                <Project match={match} />
              </Projects>
            )}
          ></ProtectedRoute>
          {/* <PrivateRoute
              path="/projects/:projectId"
              children={({ match }) => (
                <Projects>
                  <Project match={match} />
                </Projects>
              )}
            ></PrivateRoute> */}
          <ProtectedRoute path="/projects" component={Projects} />
          {/* <PrivateRoute path="/projects" component={Projects} /> */}
          <Route path="/auth">
            <Auth />
            {/* <Auth value={value} /> */}
          </Route>
          <Route path="/" exact component={Dashboard} />
          <Route path="/" render={() => <div>404</div>} />
        </Switch>
      </Layout>
      {/* </userContext.Provider> */}
    </Router>
  );
}

export default App;
