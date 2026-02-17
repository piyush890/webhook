import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useSelector(
    (state) => state.LoggedIn
  );

  if (loading) return null;

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return children;
}
