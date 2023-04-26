import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { sendFileService } from "../services";
// import { useNavigate } from "react-router-dom";

export const NewFile = ({ addFile, idFolder }) => {
  const { token } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sendMessage, setSendMessage] = useState("");
  // const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const data = new FormData();

      data.append("file", file);
      data.append("originalName", file.name);

      if (idFolder) {
        data.append("idFolder", idFolder);
      }

      const fileInfo = await sendFileService({ data, token });
      addFile(fileInfo);

      setFile([]);
      setSendMessage("Archivo subido correctamente");
      setTimeout(() => {
        setSendMessage(null);
      }, 3000);

      e.target.reset();
      // window.location.reload();
      // navigate("/homepage");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="new-file">
      {/* <h1>Añadir un fichero :</h1> */}
      <form onSubmit={handleForm}>
        <label htmlFor="file">Añade un fichero :</label>
        <br></br>
        <input
          className="archivo-button"
          type="file"
          name="file"
          id="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        {/* {file ? (
            <figure>
              <img
                src={URL.createObjectURL(file)} //imagen previa del fichero
                style={{ width: "100px" }}
                alt="Preview"
              />
            </figure>
          ) : null} */}

        {/* </fieldset> */}
        <button className="enviar-fichero">Enviar fichero</button>

        {error ? <p>{error}</p> : null}
        {loading ? <p>Cargando fichero...</p> : null}
      </form>
      {sendMessage && <p>{sendMessage}</p>}
    </section>
  );
};
