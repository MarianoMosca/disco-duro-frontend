import { MdFolderShared } from "react-icons/md";
import { Link } from "react-router-dom";

export const Folder = ({ folder }) => {
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
    </article>
  );
};
