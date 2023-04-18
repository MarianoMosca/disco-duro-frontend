import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { sendFileInFolderService } from "../services";
// import { useNavigate } from "react-router-dom";

export const NewFileInFolder = ({ addFile }) => {
  const { token } = useContext(AuthContext);
  const [, setFile] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sendMessage, setSendMessage] = useState("");
  // const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const data = new FormData(e.target);
      const file = await sendFileInFolderService({ data, token });
      console.log(file);
      console.log(e.target.file.files[0]);

      const fileName = e.target.file.files[0];

      console.log(fileName.name);
      addFile(file);
      setFile([]);
      setSendMessage("Archivo subido correctamente");
      setTimeout(() => {
        setSendMessage(null);
      }, 3000);

      e.target.reset();
      window.location.reload();
      // navigate("/homepage");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <form className="newfile" onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="name">Nombre</label>
          <input type="name" name="name" id="name" required />
        </fieldset>
        <fieldset>
          <label htmlFor="file">Fichero</label>
          <input
            type="file"
            name="file"
            id="file"
            //accept={"file/*"}
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
        </fieldset>

        <button>Enviar fichero</button>

        {error ? <p>{error}</p> : null}
        {loading ? <p>Cargando fichero...</p> : null}
      </form>
      {sendMessage && <p>{sendMessage}</p>}
    </>
  );
};
