import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

export const Auth = () => {
  const [, user, , logout] = useContext(AuthContext);
  return (
    <div>
      {user ? (
        <p>
          Logged in as Name: {user.name} - Email: {user.email}{" "}
          <button onClick={logout}>Logout</button>
        </p>
      ) : null}
      <nav>
        <ul>
          <li>
            <Link to="/">Registro</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="homepage">Homepage</Link>
          </li>
          <li>
            <Link to="profile">Profile</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
