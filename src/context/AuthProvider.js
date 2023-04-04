import React, { createContext, useEffect, useState } from "react";

import { getUserDataService } from "../services";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage("token", null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await getUserDataService({ token });
        console.log(data);
        setUser(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    if (token) getUserData();
  }, [token]);

  const login = (token) => {
    setToken(token);
  };

  const logout = () => {
    setToken("");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={[token, user, login, logout]}>
      {children}
    </AuthContext.Provider>
  );
};
