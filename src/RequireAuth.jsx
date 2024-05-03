import React from "react";
import { useAuth } from "./Auth";
import { Navigate } from "react-router-dom";

export const RequireAuth = ({ childern }) => {
  const auth = useAuth();

  if (auth.logUser == null) {
    return <Navigate to="/"></Navigate>;
  } else {
    return childern;
  }
};
