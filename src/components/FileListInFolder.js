import { FileInFolder } from "./FileInFolder";

export const FileListInFolder = ({ files, removeFile }) => {
  return files?.length ? (
    <ul className="filesList">
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
