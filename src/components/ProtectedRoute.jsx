import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function ProtectedRoute() {
  const { currentUser, loading } = useAuth();
  const location = useLocation();

  if (loading) return <p className="status">Checking authentication...</p>;
  return currentUser
    ? <Outlet />
    : <Navigate to="/login" replace state={{ from: location }} />;
}
