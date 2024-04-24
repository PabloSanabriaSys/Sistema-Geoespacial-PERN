import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/Auth/AuthProvider";
import ViewLoading from "./ViewLoading";

export default function PrivateRoute() {
  const {isAutententicated, loading, user} = useAuth();

  //console.log(loading,isAutententicated)  
  if (loading) return <ViewLoading/>

  return isAutententicated && user.rol === 'ADMINISTRADOR' ? <Outlet /> : <Navigate to="/login" />;
}