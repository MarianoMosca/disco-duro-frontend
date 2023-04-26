import { Link } from "react-router-dom";
import { Folder } from "./Folder";

export const FolderList = ({ folders }) => {
  return folders?.length ? (
    <ul className="folder-list">
      {folders.map((folder) => {
        return (
          <li key={folder.id}>
            <Folder key={folder.id} folder={folder} />
          </li>
        );
      })}
    </ul>
  ) : (
    <p>No hay carpetas disponibles. Hay que estar registrado.</p>
  );
};
