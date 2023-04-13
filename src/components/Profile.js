import React, { useContext } from "react";

import { AuthContext } from "../context/AuthContext";
import { useUser } from "../hooks/useUser";
import { ErrorMessage } from "./ErrorMessage";

export const Profile = () => {
  const { token } = useContext(AuthContext);
  const { user, loading, error } = useUser(token);

  if (loading) return <p>Cargando datos del usuario</p>;
  if (error) <ErrorMessage message={error.message} />;
  return (
    <div>
      <h3>Nombre: {user.name} </h3>
      <h3>Email: {user.email} </h3>
    </div>
  );
};
