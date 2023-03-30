import "./App.css";
/* import { Files } from "./components/Files";
import { Folders } from "./components/Folders";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { RegisterFormPage } from "./pages/RegisterFormPage"; */

import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/homepage">Homepage</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

/* function App() {
  return (
    <main>
      <Header />
      
      <section>
        <h3>Carpetas</h3>
        <Folders />
        <h3>Archivos</h3>
        <Files />
      </section>
      <section>
        <menu>
          <ul>
            <li>Crear Carpeta</li>
          </ul>
          <ul>
            <li>Subir archivo</li>
          </ul>
        </menu>
      </section>
      <section>
        <menu>
          <ul>
            <li>Informacion del Archivo seleccionado</li>
          </ul>
          <ul>
            <li>Opciones de archivo</li>
          </ul>
        </menu>
      </section>
      <Footer />
    </main>
  );
} */

export default App;
