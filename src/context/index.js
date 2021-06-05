import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./auth-context";
import { UserProvider } from "./user-context";

function AppProviders({ children }) {
  return (
    <Router>
      <AuthProvider>
        <UserProvider>{children}</UserProvider>
      </AuthProvider>
    </Router>
  );
}

export default { AppProviders };
