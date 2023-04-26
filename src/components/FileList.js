import { File } from "./File";

export const FileList = ({ files, removeFile }) => {
  return files?.length ? (
    <ul className="lista-ficheros">
      {files.map((file) => {
        return (
          <li key={file.id}>
            <File
              className="file"
              key={file.id}
              file={file}
              removeFile={removeFile}
            />
          </li>
        );
      })}
    </ul>
  ) : (
    <p className="ficheros-disponibles">No hay ficheros disponibles.</p>
  );
};
