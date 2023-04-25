import { useContext } from "react";

// import { Refresh } from "../components/Refresh";
import { AuthContext } from "../context/AuthContext";
import useFiles from "../hooks/useFiles";
import { Loading } from "../components/Loading";
import { ErrorMessage } from "../components/ErrorMessage";
import { NewFile } from "../components/NewFile";
import { FileListInFolder } from "../components/FileListInFolder";
import useFolder from "../hooks/useFolder";
import { useParams } from "react-router-dom";

export const FolderPage = () => {
  const { idFolder } = useParams();
  const { files, loading, error, addFile, removeFile } = useFiles(idFolder);

  const { folder } = useFolder(idFolder);
  //const folderNames = folder.map((item) => item.name);

  const { user } = useContext(AuthContext);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  console.log(files);

  return (
    <section>
      <h1 className="carpeta">Carpeta: {folder.name}</h1>

      {user ? <NewFile idFolder={idFolder} addFile={addFile} /> : null}

      <h1 className="listaFicheros">Mis ficheros </h1>
      {/* <Refresh /> */}
      <FileListInFolder
        idFolder={idFolder}
        files={files}
        removeFile={removeFile}
      />
    </section>
  );
};
