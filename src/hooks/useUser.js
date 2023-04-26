import { useContext, useEffect, useState } from "react";
import { editUserService } from "../services";
import { AuthContext } from "../context/AuthContext";

const useUser = (id) => {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const loadFiles = async () => {
      try {
        setLoading(true);
        const data = await editUserService({ name, email, token });

        setName(name);
        setEmail(email);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadFiles();
  }, [id, name, email, token]);

  return { name, email, loading, error };
};
export default useUser;
