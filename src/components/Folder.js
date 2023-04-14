import { MdFolderShared } from "react-icons/md";

export const Folder = ({ folder }) => {
  return (
    <article className="folder">
      <p>Nombre de la carpeta :{folder.name}.</p>
      <p>Creada el {new Date(folder.createdAt).toISOString()}</p>
      <MdFolderShared
        style={{
          width: 50,
          height: 50,
          color: "red",
        }}
      />
    </article>
  );
};
