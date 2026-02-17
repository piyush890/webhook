import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PublicRoute({ children }) {
  const { isAuthenticated, loading } = useSelector(
    (state) => state.LoggedIn
  );

  // ⏳ Wait until auth is resolved
  if (loading) return null; // or spinner

  // 🔒 Already logged in → block auth page
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  // ✅ Not logged in → allow
  return children;
}
