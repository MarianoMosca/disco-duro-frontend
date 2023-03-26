import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { RegisterFormPage } from "./pages/RegisterFormPage";
function App() {
  return (
    <main className="App">
      <Header />
      <RegisterFormPage />
      <nav>
        Nav para buscar archivos o carpetas por ejemplo, aunque viendo el modelo
        de Google Drive aqui tiene un form donde directamente buscas el archivo
        o carpeta!
      </nav>
      <section>
        <p>
          Podemos crear una seccion para los archivos y carpetas, o separar dos
          secciones una para cada.
        </p>
      </section>
      <Footer />
    </main>
  );
}

export default App;
