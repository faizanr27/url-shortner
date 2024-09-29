import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, token }) {
  return token ? children : <Navigate to="signin" replace/>;
}

export default ProtectedRoute;
