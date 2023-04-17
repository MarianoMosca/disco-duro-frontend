import { File } from "./File";

export const FileList = ({ files, removeFile }) => {
  return files?.length ? (
    <ul className="filesList">
      {files.map((file) => {
        return (
          <li key={file.id}>
            <File file={file} removeFile={removeFile} />
          </li>
        );
      })}
    </ul>
  ) : (
    <p>No hay ficheros disponibles.</p>
  );
};
