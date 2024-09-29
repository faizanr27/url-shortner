import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, token }) {
  const authToken = token || localStorage.getItem('token');
  return authToken ? children : <Navigate to="/signin" replace />;
}

export default ProtectedRoute;
