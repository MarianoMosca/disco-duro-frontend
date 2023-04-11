import { useContext } from "react";
//import { MdFilePresent } from "react-icons/md";
import { ErrorMessage } from "../components/ErrorMessage";
import { FileList } from "../components/FileList";
import { Loading } from "../components/Loading";
import useFiles from "../hooks/useFiles";
import { NewFile } from "../components/NewFile";
import { AuthContext } from "../context/AuthContext";
import { Refresh } from "../components/Refresh";

import { RefreshFolder } from "../components/RefreshFolder";
// import { NewFolder } from "../components/NewFolder";

//import { useParams } from "react-router-dom";
//import { File } from "../components/File";

export const HomePage = () => {
  // const { id } = useParams();
  const { files, loading, error, addFile, removeFile } = useFiles(); //probar id con useParams
  //console.log(files, loading, error);
  const { user } = useContext(AuthContext);
  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  //console.log(files); //no carga nada
  return (
    <>
      {user ? <NewFile addFile={addFile} /> : null}

      <h1 className="listaFicheros">Mis ficheros </h1>
      <Refresh />

      <FileList files={files} removeFile={removeFile} />
      {/* <NewFolder /> */}
      <h1 className="listaCarpetas">Mis carpetas </h1>
      <RefreshFolder />
    </>
  );
};
