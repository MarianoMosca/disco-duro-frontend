import { useEffect, useState } from "react";
import { getAllFilesService } from "../services";

export const useFiles = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadFiles = async () => {
      try {
        setLoading(true);
        const data = await getAllFilesService();

        setFiles(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadFiles();
  }, []);
  return { files, loading, error };
};
