import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";

const ProtectedRoute = () => {
  const [isAuth] = useState<boolean>(() => {
    return localStorage.getItem("isAuthenticated") === "true"; // Recuperamos el estado
  })

  return isAuth ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
