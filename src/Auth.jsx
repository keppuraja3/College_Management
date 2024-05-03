import React from "react";
import { createContext, useContext, useState } from "react";

const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [logUser, setLogUser] = useState(null);

  const login = (logUser) => {
    setLogUser(logUser);
  };

  const logout = () => {
    setLogUser(null);
  };

  return (
    <>
      <Auth.Provider value={{ logUser, login, logout }}>
        {children}
      </Auth.Provider>
    </>
  );
};

export const useAuth = () => {
  return useContext(Auth);
};
