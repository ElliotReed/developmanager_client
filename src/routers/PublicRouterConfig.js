import React from "react";
import { Switch, Route } from "react-router-dom";

import Auth from "screens/Auth";
import Welcome from "screens/Welcome";
import Register from "screens/Register";

export default function PublicRouterConfig() {
  return (
    <Switch>
      <Route path="/auth">
        <Auth />
      </Route>
      <Route path="/create-account" exact component={Register} />
      <Route path="/" exact component={Welcome} />
      <Route path="/" render={() => <div>404</div>} />
    </Switch>
  );
}
