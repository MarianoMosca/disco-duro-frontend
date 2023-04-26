import { useContext, useState } from "react";
import { MdFolderShared } from "react-icons/md";
import { Link, Navigate } from "react-router-dom";
import { deleteFolderService } from "../services";
import { AuthContext } from "../context/AuthContext";

export const Folder = ({ folder, removeFolder }) => {
  const { user, token } = useContext(AuthContext);
  const [error, setError] = useState("");
  const idUser = user.id;
  const deleteFolder = async (id) => {
    try {
      await deleteFolderService({ id, idUser, token });

      if (removeFolder) {
        removeFolder(id);
      } else {
        Navigate("/homepage");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <article className="item">
      <p className="label">Nombre de la carpeta:</p>
      <p className="nombre">{folder.name}</p>
      <p className="created-at">
        Creada el {new Date(folder.createdAt).toISOString()}
      </p>
      <MdFolderShared
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

      <Link to={`/folders/${folder.id}`}>
        <button className="operaciones-ficheros">
          operaciones con ficheros
        </button>
      </Link>
      {user && user.id === folder.idUser ? (
        <section>
          <button
            onClick={() => {
              if (
                window.confirm("La carpeta debe estar vacía ¿Quieres seguir?")
              )
                deleteFolder(folder.id);
            }}
          >
            Borrar carpeta
          </button>
          {error ? <p>{error}</p> : null}
        </section>
      ) : null}
    </article>
  );
};
