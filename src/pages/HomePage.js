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
      <br></br>
      {user ? <NewFile addFile={addFile} /> : null}

      <FileList files={files} removeFile={removeFile} />

      <br></br>
      {user ? <NewFolder addFolder={addFolder} /> : null}

      <FolderList folders={folders} removeFolder={removeFolder} />
    </section>
  );
};
