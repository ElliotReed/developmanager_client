import { Routes, Route } from "react-router-dom";

import ControlledRoute from "libs/authentication/ControlledRoute";

import Auth from "screens/Auth";
import Dashboard from "screens/Dashboard";
import NotFound from "screens/NotFound";
import Projects from "screens/Projects";
import Welcome from "screens/Welcome";

export default function RouterConfig() {
  return (
    <Routes>
      <Route
        path="/sign-in"
        exact
        element={<Auth mode="login" />}
      >
      </Route>
      <Route
        path="/create-account"
        exact
        element={<Auth mode="register" />}
      />
      <Route path="/" exact element={<Welcome />} />
      <Route path="/dashboard" element={
        <ControlledRoute>
          <Dashboard />
        </ControlledRoute>}
      />
      <Route path="/projects/:projectId" element={
        <ControlledRoute>
          <Projects />
        </ControlledRoute>}
      />
      <Route path="/projects" exact element={
        <ControlledRoute>
          <Projects />
        </ControlledRoute>}
      />

      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
