import { BrowserRouter as Router } from "react-router-dom";

import { AxiosProvider } from "libs/authentication/axios/useAxios";
import { AuthProvider } from "libs/authentication/useAuth.js";

export default function AppProviders({ children }) {
  return (
    <Router>
      <AxiosProvider>
        <AuthProvider>{children}</AuthProvider>
      </AxiosProvider>
    </Router>
  );
}
