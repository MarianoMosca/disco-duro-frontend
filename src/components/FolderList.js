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
          </li>
        );
      })}
    </ul>
  ) : null;
};
