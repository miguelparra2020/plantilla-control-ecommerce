import { Navigate, Outlet } from "react-router-dom"
import { useGoogleAuth } from "./modules/Login/hooks/useGoogleAuth"

const ProtectedRoute = () => {
  const { user } = useGoogleAuth()
  return user ? <Outlet /> : <Navigate to="/" replace />
}

export default ProtectedRoute
