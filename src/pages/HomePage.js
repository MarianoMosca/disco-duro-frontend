import { useContext } from "react";
//import { MdFilePresent } from "react-icons/md";
import { ErrorMessage } from "../components/ErrorMessage";
import { FileList } from "../components/FileList";
import { Loading } from "../components/Loading";
import useFiles from "../hooks/useFiles";
import { NewFile } from "../components/NewFile";
import { AuthContext } from "../context/AuthContext";
// import { Refresh } from "../components/Refresh";

// import { RefreshFolder } from "../components/RefreshFolder";
import { NewFolder } from "../components/NewFolder";
import { FolderList } from "../components/FolderList";
import useFolders from "../hooks/useFolders";
//import { Navigate } from "react-router-dom";

import "./css/homepage/homepage.css";

export const HomePage = () => {
  // const { id } = useParams();
  const { user } = useContext(AuthContext);
  const { files, loading, error, addFile, removeFile } = useFiles();
  const { folders, addFolder } = useFolders();
  //probar id con useParams
  //console.log(files, loading, error);
  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  //console.log(files); //no carga nada
  return (
    <section className="homePage">
      {user ? <NewFile addFile={addFile} /> : null}

      <h1 className="ficheros-h1">Mis ficheros: </h1>

      <FileList files={files} removeFile={removeFile} />

      <h2 className="carpetas-h2">Mis carpetas: </h2>
      {user ? <NewFolder addFolder={addFolder} /> : null}

      <FolderList folders={folders} />

      {/* <RefreshFolder /> */}
    </section>
  );
};
