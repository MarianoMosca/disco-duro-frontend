import { useContext } from "react";
//import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Auth = () => {
  const { user, logout } = useContext(AuthContext);

  return user ? (
    <section>
      Conectado como {user.email}
      <button onClick={() => logout()}> Salir</button>
    </section>
  ) : null;
};
