import "./App.css";

import { Header } from "./components/Header";
import { Auth } from "./components/Auth";
function App() {
  return (
    <main>
      <Header />
      <Auth />
    </main>
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
