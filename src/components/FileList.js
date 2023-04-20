import { File } from "./File";

export const FileList = ({ files, removeFile }) => {
  return files?.length ? (
    <ul className="filesList">
      {files.map((file) => {
        return (
          <li key={file.id}>
            <File key={file.id} file={file} removeFile={removeFile} />
          </li>
        );
      })}
    </ul>
  ) : (
    <p>No hay ficheros disponibles. Hay que estar registrado.</p>
  );
};
