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
    <>
      <form className="newFolder" onSubmit={handleForm}>
        <h1>Añadir una carpeta</h1>

        <fieldset>
          <label htmlFor="name">Nombre</label>
          <input type="name" name="name" id="name" required />
        </fieldset>
        <fieldset>
          <label htmlFor="file">Fichero (opcional) </label>
          <input type="file" id="file" name="file" />
        </fieldset>
        <button>Crear carpeta</button>

        {loading ? <p>Cargando carpeta...</p> : null}
        {error ? <p>{error}</p> : null}
      </form>
    </>
  );
};
