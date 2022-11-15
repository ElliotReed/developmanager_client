import { useNavigate } from "react-router-dom";

import { useAuth } from "./useAuth";

export default function ControlledRoute({ children }) {
  const auth = useAuth();
  const navigate = useNavigate()
  if (!auth.user) {
    return navigate('/sign-in');
  }
  return children;

}
