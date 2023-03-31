import { File } from "./File";

export const FileList = ({ files }) => {
  return files.length ? (
    <ul className="fileList">
      {files.map((file) => {
        return (
          <li key={file.id}>
            <File file={file} />
          </li>
        );
      })}
    </ul>
  ) : (
    <p>No hay ficheros...</p>
  );
};
