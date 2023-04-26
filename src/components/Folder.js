import { useContext, useState } from "react";
import { MdFolderShared } from "react-icons/md";
import { AuthContext } from "../context/AuthContext";
import { deleteFolderService } from "../services";
import { Link, Navigate } from "react-router-dom";

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
      <p className="nombre-carpeta">Nombre de la carpeta:</p>
      <p className="folder-name">{folder.name}.</p>
      <p className="created-carpeta">
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
      {user && user.id === folder.idUser ? (
        <section>
          <section className="contenedor-carpetas">
            <article>
              <button
                className="boton-borrar-carpeta"
                onClick={() => {
                  if (
                    window.confirm(
                      "La carpeta debe estar vacía ¿Quieres seguir?"
                    )
                  )
                    deleteFolder(folder.id);
                }}
              >
                Borrar carpeta
              </button>
            </article>
            <article>
              <Link to={`/folders/${folder.id}`}>
                <button className="boton-acceder">Acceder</button>
              </Link>
            </article>
          </section>

          {error ? <p>{error}</p> : null}
        </section>
      ) : null}
    </article>
  );
};
