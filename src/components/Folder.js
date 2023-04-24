import { useContext, useState } from "react";
import { MdFolderShared } from "react-icons/md";
import { AuthContext } from "../context/AuthContext";
import { deleteFolderService } from "../services";
import { Navigate } from "react-router-dom";

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
    <article className="folder">
      <p>Nombre de la carpeta :{folder.name}.</p>
      <p>Creada el {new Date(folder.createdAt).toISOString()}</p>
      <MdFolderShared
        style={{
          width: 50,
          height: 50,
          color: "red",
        }}
      />
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
