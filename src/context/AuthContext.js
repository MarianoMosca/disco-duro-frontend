import { createContext, useEffect, useState } from "react";
import { getMyDataService } from "../services";

export const AuthContext = createContext(null);

export const AuthContextProviderComponent = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) localStorage.setItem("token", token);
  }, [token]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await getMyDataService(token);

        setUser(data);
      } catch (error) {
        logout();
      }
    };

    if (token) getUserData();
  }, [token, setToken]);

  const logout = () => {
    setToken("");
    localStorage.removeItem("token");
    setUser(null);
  };

  const login = (token) => {
    setToken(token);
  };

  const updateAvatar = (filename) => {
    setUser({
      ...user,
      avatar: filename,
    });
  };
  const updateUser = (user) => {
    setUser(user);
  };

  return (
    <AuthContext.Provider
      value={{ token, user, login, logout, updateAvatar, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
