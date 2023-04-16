import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { deleteFileService, downloadFileService } from "../services";
import { useNavigate } from "react-router-dom";
import { MdFilePresent } from "react-icons/md";

export const File = ({ file, removeFile }) => {
  const { user, token } = useContext(AuthContext);
  const [isDownloaded, setIsDownloaded] = useState(false);

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
  const downloadFile = async (id) => {
    try {
      const blob = await downloadFileService({ id, token });
      setIsDownloaded(true);
      setTimeout(() => {
        setIsDownloaded(false);
      }, 3000);

      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${file.name}`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <article className="file">
      <p>
        Nombre del archivo:{file.name}. Habrá que cambiar el nombre en la base
        de datos
      </p>
      <p>Estudiar una vista previa del archivo</p>
      <p>Subido el {new Date(file.createdAt).toLocaleDateString()}</p>
      <MdFilePresent
        style={{
          width: 50,
          height: 50,
          color: "red",
        }}
      />

      {user && user.id === file.idUser ? (
        <section>
          <button
            onClick={() => {
              if (window.confirm("¿Estás seguro?")) deleteFile(file.id);
            }}
          >
            Borrar fichero
          </button>
          {error ? <p>{error}</p> : null}
          {isDownloaded ? <p>Archivo descargado correctamente</p> : null}
        </section>
      ) : null}

      {user && user.id === file.idUser ? (
        <section>
          <button
            onClick={() => {
              if (window.confirm("¿Estás seguro?")) downloadFile(file.id);
            }}
          >
            Descargar fichero
          </button>
          {error ? <p>{error}</p> : null}
        </section>
      ) : null}
    </article>
  );
};
