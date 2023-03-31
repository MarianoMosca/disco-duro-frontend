import React from "react";
import { MdFilePresent } from "react-icons/md";
import { ErrorMessage } from "../components/ErrorMessage";
import { FileList } from "../components/FileList";
import { Loading } from "../components/Loading";
import { useFiles } from "../hooks/useFiles";
export const HomePage = () => {
  const { files, loading, error } = useFiles();
  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;
  console.log(files);
  return (
    <>
      <h1 className="listaFicheros">Lista de ficheros </h1>

      <FileList files={files} />
      <div>
        <MdFilePresent
          style={{
            width: 100,
            height: 100,
            color: "red",
          }}
        />
      </div>
    </>
  );
};
