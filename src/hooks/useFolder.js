import { useContext, useEffect, useState } from "react";
import { getFolderDataService } from "../services";
import { AuthContext } from "../context/AuthContext";

const useFolder = (id) => {
  const [folder, setFolder] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const loadFileInFolder = async () => {
      try {
        setLoading(true);
        const data = await getFolderDataService(token, id);
        console.log(data);
        setFolder(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadFileInFolder();
  }, [id, token]);

  return { folder, error, loading };
};

export default useFolder;
