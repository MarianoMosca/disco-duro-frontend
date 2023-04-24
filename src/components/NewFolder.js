import { useContext, useState } from "react";
import { sendFolderService } from "../services";
import { AuthContext } from "../context/AuthContext";

export const NewFolder = ({ addFolder }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { token } = useContext(AuthContext);
  const handleForm = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = new FormData(e.target);
      const folder = await sendFolderService({ data, token });
      addFolder(folder);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="carpetas">
      <br></br>

      <h1>Añadir una carpeta :</h1>
      <form onSubmit={handleForm}>
        <label htmlFor="name">Nombre</label>
        <br></br>

        <input type="name" name="name" id="name" required />
        <label htmlFor="file">Fichero (opcional) </label>
        <br></br>

        <input type="file" id="file" name="file" />
        <button>Crear carpeta</button>

        {loading ? <p>Cargando carpeta...</p> : null}
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};
