import { BrowserRouter } from "react-router-dom";

import { AxiosProvider } from "libs/authentication/axios/useAxios";
import { AuthProvider } from "libs/authentication/useAuth.js";

export default function AppProviders({ children }) {
  return (
    <BrowserRouter>
      <AxiosProvider>
        <AuthProvider>{children}</AuthProvider>
      </AxiosProvider>
    </BrowserRouter>
  );
}
