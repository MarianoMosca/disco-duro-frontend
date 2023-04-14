import { useContext } from "react";

import { Refresh } from "../components/Refresh";
import { AuthContext } from "../context/AuthContext";
import useFiles from "../hooks/useFiles";
import { Loading } from "../components/Loading";
import { ErrorMessage } from "../components/ErrorMessage";
import { NewFileInFolder } from "../components/NewFileInFolder";
import { FileListInFolder } from "../components/FileListInFolder";
import useFolder from "../hooks/useFolder";
import { useParams } from "react-router-dom";

export const FolderPage = () => {
  const { files, loading, error, removeFile } = useFiles();
  const { id } = useParams();
  const { folder } = useFolder(id);

  const { user } = useContext(AuthContext);
  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  //console.log(files); //no carga nada
  return (
    <>
      <h1 className="carpeta">Carpeta:{folder.name}</h1>
      {user ? <NewFileInFolder id={id} /> : null}

      <h1 className="listaFicheros">Mis ficheros </h1>
      <Refresh />
      <FileListInFolder id={id} files={files} removeFile={removeFile} />
    </>
  );
};
