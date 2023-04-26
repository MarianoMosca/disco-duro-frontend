import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

export const Auth = () => {
  const { user, logout } = useContext(AuthContext);

  return user ? (
<<<<<<< HEAD
    <>
      <section>
        Conectado como
        <Link to="/user">{user.name}</Link>
        <Avatar user={user} />
        <button onClick={() => logout()}> Salir</button>
      </section>
    </>
=======
    <section className="auth">
      Conectado como
      <Link to="/user">
        <p> {user.name}</p>
      </Link>
      <button onClick={() => logout()}> Salir</button>
    </section>
>>>>>>> mariano
  ) : null;
};
