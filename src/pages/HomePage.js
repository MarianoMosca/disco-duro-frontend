import { useContext } from "react";
import { ErrorMessage } from "../components/ErrorMessage";
import { FileList } from "../components/FileList";
import { Loading } from "../components/Loading";
import useFiles from "../hooks/useFiles";
import { NewFile } from "../components/NewFile";
import { AuthContext } from "../context/AuthContext";
import { NewFolder } from "../components/NewFolder";
import { FolderList } from "../components/FolderList";
import useFolders from "../hooks/useFolders";

export const HomePage = () => {
  const { user } = useContext(AuthContext);
  const { files, loading, error, addFile, removeFile } = useFiles();
  const { folders, addFolder, removeFolder } = useFolders();

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <>
      {user ? <NewFile addFile={addFile} /> : null}

      <h1 className="listaFicheros">Mis ficheros </h1>

      <FileList files={files} removeFile={removeFile} />

      <h1 className="listaCarpetas">Mis carpetas </h1>
      {user ? <NewFolder addFolder={addFolder} /> : null}

      <FolderList folders={folders} removeFolder={removeFolder} />
    </>
  );
};
