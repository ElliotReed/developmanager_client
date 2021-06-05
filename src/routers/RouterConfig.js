import { Switch, Route } from "react-router-dom";

import Auth from "screens/Auth";
import Dashboard from "screens/Dashboard";
import Welcome from "screens/Welcome";
import Projects from "screens/Projects";
// import Project from "components/screens/Projects//Project";
import ProtectedRoute from "components/common/ProtectedRoute";
import Register from "screens/Register";

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
      <Route path="/create-account" exact component={Register} />
      <ProtectedRoute path="/dashboard" exact component={Dashboard} />
      <Route path="/" exact component={Welcome} />
      <Route path="/" render={() => <div>404</div>} />
    </Switch>
  );
}
