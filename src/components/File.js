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
    <section className="item">
      <p className="label">Nombre del archivo: </p>
      <p className="nombre"> {file.originalName}</p>

      <p className="created-at">
        Subido el {new Date(file.createdAt).toISOString()}
      </p>
      <MdFilePresent
        style={{
          width: 70,
          height: 70,
          margin: "5%",
          marginLeft: "35%",
          color: "#172a45",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />

      <section className="contenedor-botones">
        {user && user.id === file.idUser ? (
          <article className="descargar-fichero">
            <button
              className="boton-descarga"
              onClick={() => {
                if (window.confirm("¿Estás seguro?")) downloadFile(file.id);
              }}
            >
              Descargar
            </button>
            {error ? <p>{error}</p> : null}
            {isDownloaded ? <p>Archivo descargado correctamente</p> : null}
          </article>
        ) : null}
        {user && user.id === file.idUser ? (
          <article className="borrar-fichero">
            <button
              className="boton-borrar"
              onClick={() => {
                if (window.confirm("¿Estás seguro?")) deleteFile(file.id);
              }}
            >
              Borrar
            </button>
            {error ? <p>{error}</p> : null}
          </article>
        ) : null}
      </section>
    </section>
  );
};
