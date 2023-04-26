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

import "./css/homepage/homepage.css";

export const HomePage = () => {
  const { user } = useContext(AuthContext);
  const { files, loading, error, addFile, removeFile } = useFiles();
  const { folders, addFolder, removeFolder } = useFolders();

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section className="homePage">
      <h1 className="ficheros-h1">Mis ficheros: </h1>
      <br></br>
      {user ? <NewFile addFile={addFile} /> : null}

      <FileList files={files} removeFile={removeFile} />

      <h2 className="carpetas-h2">Mis carpetas: </h2>
      {user ? <NewFolder addFolder={addFolder} /> : null}

      <FolderList folders={folders} removeFolder={removeFolder} />
    </section>
  );
};
