import { Switch, Route } from "react-router-dom";

import ControlledRoute from "libs/authentication/ControlledRoute";

import Dashboard from "screens/Dashboard";
import NotFound from "screens/NotFound";
import Projects from "screens/Projects";

export default function RouterConfig() {
  return (
    <Switch>
      <ControlledRoute path="/dashboard" exact component={Dashboard} />
      <ControlledRoute path="/projects/:projectId" component={Projects} />
      <ControlledRoute path="/projects" component={Projects} />
      <Route path="/" component={NotFound} />
    </Switch>
  );
}
