import React from "react";
import { createContext, useContext, useState } from "react";
function Auth() {
  const Auth = createContext();
  return <div>Auth</div>;
}

export const AuthProvider = ({ children }) => {
  const [logUserRole, setLogUserRole] = useState(null);

  const login = (role) => {
    setLogUserRole(role);
  };

  const logout = () => {
    setLogUserRole(null);
  };

  return (
    <>
      <Auth.Provider value={{ logUserRole, login, logout }}>
        {children}
      </Auth.Provider>
    </>
  );
};
