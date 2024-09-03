import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

export const SecureRoute = ({ children }: any) => {
  const context = useContext(AuthContext);

  if (context.isAuthenticated) {
    return <>{children}</>;
  }
  return <Navigate to="/login" />;
};
