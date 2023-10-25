import { Navigate } from "react-router-dom";
import { UseUserAuth } from "../context/FirebaseContext";

function ProtectedRoute({ children }) {
  let { user } = UseUserAuth();
  if (!user) {
    return <Navigate to="/JC-Website/login" />;
  }
  return <div>{children}</div>;
}

export default ProtectedRoute;
