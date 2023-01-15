import { ACCESS_TOKEN_NAME } from "../../api/config/config";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function RequireAuth() {
  const token = localStorage.getItem(ACCESS_TOKEN_NAME);
  const location = useLocation();

  if (token === null) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
}
