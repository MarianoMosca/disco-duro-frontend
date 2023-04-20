import { useContext, useEffect, useState } from "react";
import {
  getAllFolderDataService,
  getSingleFolderDataService,
} from "../services";
import { AuthContext } from "../context/AuthContext";

const useFolder = (idFolder) => {
  const [folder, setFolder] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const loadFileInFolder = async () => {
      try {
        setLoading(true);
        const data = idFolder
          ? await getSingleFolderDataService(token, idFolder)
          : await getAllFolderDataService(token);

        setFolder(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (token) loadFileInFolder();
  }, [token, idFolder]);

  return { folder, error, loading };
};

export default useFolder;
