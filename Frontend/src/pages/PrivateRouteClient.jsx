import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/Auth/AuthProvider";
import ViewLoading from "./ViewLoading";

export default function PrivateRouteClient() {
  const {isAutententicated, loading} = useAuth();

  //console.log(loading,isAutententicated)  
  if (loading) return <p><ViewLoading/></p> 

  return isAutententicated ? <Outlet /> : <Navigate to="/login" />;
}