import { useContext, useEffect, useState } from "react";
import { getAllFilesService } from "../services";
import { AuthContext } from "../context/AuthContext";

const useFiles = (id) => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const loadFiles = async () => {
      try {
        setLoading(true);
        const data = await getAllFilesService(token);
        //console.log(data);
        setFiles(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadFiles();
  }, [id, token]);

  const addFile = (data) => {
    setFiles([data, ...files]);
  };

  const removeFile = (id) => {
    setFiles(files.filter((file) => file.id !== id));
  };

  return { files, loading, error, addFile, removeFile };
};
export default useFiles;