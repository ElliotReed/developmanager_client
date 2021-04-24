import React from "react";
import { Switch, Route } from "react-router-dom";

import Auth from "components/screens/Auth";
import Home from "components/screens/Home";

export default function PublicRouterConfig() {
  return (
    <Switch>
      <Route path="/auth">
        <Auth />
      </Route>
      <Route path="/" exact component={Home} />
      <Route path="/" render={() => <div>404</div>} />
    </Switch>
  );
}
