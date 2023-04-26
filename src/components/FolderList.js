import { Link } from "react-router-dom";
import { Folder } from "./Folder";

export const FolderList = ({ folders, removeFolder }) => {
  return folders?.length ? (
    <ul className="folder-list">
      {folders.map((folder) => {
        return (
          <li key={folder.id}>
            <Folder
              key={folder.id}
              folder={folder}
              removeFolder={removeFolder}
            />

            <Link to={`/folders/${folder.id}`}>
              <button className="operaciones-ficheros">
                operaciones con ficheros
              </button>
            </Link>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>No hay carpetas disponibles. Hay que estar registrado.</p>
  );
};
