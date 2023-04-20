import { useContext } from "react";
import { Auth } from "./Auth";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export const Header = () => {
  const { token } = useContext(AuthContext);
  return (
    <header className="main-header">
      <h1>Disco duro virtual</h1>
      <nav>
        <ul>
          {!token ? (
            <>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/homepage">Ficheros</Link>
            </li>
          )}
        </ul>
        <Auth />
      </nav>
    </header>
  );
};
