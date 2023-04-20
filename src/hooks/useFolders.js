import { useContext, useEffect, useState } from "react";
import { getAllFoldersService } from "../services";
import { AuthContext } from "../context/AuthContext";

export const useFolders = (id) => {
  const [folders, setFolders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const loadFolders = async () => {
      try {
        setLoading(true);
        const data = await getAllFoldersService(token);
        //console.log(data);
        setFolders(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadFolders();
  }, [id, token]);

  const addFolder = (data) => {
    setFolders([data, ...folders]);
  };

  return { folders, loading, error, addFolder };
};
export default useFolders;
