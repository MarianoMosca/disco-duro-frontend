import { MdFolderShared } from "react-icons/md";

export const Folder = ({ folder }) => {
  return (
    <article className="folder">
      <p>Nombre de la carpeta :{folder.name}.</p>
      <p>Creada el {new Date(folder.createdAt).toISOString()}</p>
      <MdFolderShared
        style={{
          width: 70,
          height: 70,
          margin: "5%",
          marginLeft: "35%",
          color: "#172a45",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </article>
  );
};
