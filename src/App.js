import "./App.css";
/* import { Files } from "./components/Files";
import { Folders } from "./components/Folders";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { RegisterFormPage } from "./pages/RegisterFormPage"; */

import { Link, Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { token } = useContext(AuthContext);
  return (
    <main>
      <Header />

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
      </nav>
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
