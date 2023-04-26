import { FileInFolder } from "./FileInFolder";

export const FileListInFolder = ({ files, removeFile }) => {
  return files?.length ? (
    <ul className="file-list">
      {files.map((file) => {
        return (
          <li key={file.id}>
            <FileInFolder file={file} removeFile={removeFile} />
          </li>
        );
      })}
    </ul>
  ) : (
    <p>No hay ficheros disponibles. Hay que estar registrado.</p>
  );
};
