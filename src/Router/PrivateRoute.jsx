import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../components/core/LoadingSpinner";
import { AuthContext } from "../Contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, userLoading } = useContext(AuthContext);
  const location = useLocation();
  if (userLoading) {
    return <LoadingSpinner />;
  }

  if (user && user?.id) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
