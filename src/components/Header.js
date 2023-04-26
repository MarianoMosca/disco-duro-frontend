import { useContext } from "react";
import { Auth } from "./Auth";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export const Header = () => {
  const { token } = useContext(AuthContext);
  return (
    <header className="main-header">
      <h1> </h1>
      <nav>
        <ul>
          {!token ? (
            <>
              <li>
                <Link to="/">
                  <p>Inicio</p>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <p>login</p>
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/homepage">
                <p>Ficheros</p>
              </Link>
            </li>
          )}
        </ul>
        <Auth />
      </nav>
    </header>
  );
};
