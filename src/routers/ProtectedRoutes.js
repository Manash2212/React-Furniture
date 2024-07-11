import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../custom-hook/useAuth";

const ProtectedRoutes = () => {
  const { currentUser } = useAuth();

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
