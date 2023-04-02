import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { deleteFileService } from "../services";
import { useNavigate } from "react-router-dom";

export const File = ({ file, removeFile }) => {
  const { token, user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const deleteFile = async (id) => {
    try {
      await deleteFileService({ id, token });

      if (removeFile) {
        removeFile(id);
      } else {
        navigate("/homepage");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <article className="file">
      <p>{file.name} Habrá que cambiar el nombre en la base de datos</p>
      <p>Estudiar una vista previa del archivo</p>
      <p>
        Propiedad de {file.email} subido el{" "}
        {new Date(file.created.at).toLocaleString()};
      </p>
      {user && user.id === file.user_id ? (
        <section>
          <button
            onClick={() => {
              if (window.confirm("¿Estás seguro?")) deleteFile(file.id);
            }}
          >
            Borrar fichero
          </button>
          {error ? <p>{error}</p> : null}
        </section>
      ) : null}
    </article>
  );
};
