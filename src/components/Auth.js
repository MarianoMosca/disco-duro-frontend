import { useContext } from "react";
//import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export const Auth = () => {
  const { user, logout } = useContext(AuthContext);

  return user ? (
    <section>
      Conectado como <Link to={`/user/${user.id}`}>{user.name}</Link>{" "}
      <button onClick={() => logout()}> Salir</button>
    </section>
  ) : null;
};
