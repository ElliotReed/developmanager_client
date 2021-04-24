import React from "react";
import { Switch, Route } from "react-router-dom";

import Auth from "components/screens/Auth";
import Dashboard from "components/screens/Dashboard";
import Home from "components/screens/Home";
import Projects from "components/screens/Projects";
// import Project from "components/screens/Projects//Project";
import ProtectedRoute from "components/shared/ProtectedRoute";

export default function RouterConfig() {
  return (
    <Switch>
      <ProtectedRoute
        path="/projects/:projectId"
        children={({ match }) => (
          <Projects match={match}>{/* <Project match={match} /> */}</Projects>
        )}
      ></ProtectedRoute>
      <ProtectedRoute path="/projects" component={Projects} />
      <Route path="/auth">
        <Auth />
      </Route>
      <ProtectedRoute path="/dashboard" exact component={Dashboard} />
      <Route path="/" exact component={Home} />
      <Route path="/" render={() => <div>404</div>} />
    </Switch>
  );
}
