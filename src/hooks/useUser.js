import { useContext, useEffect, useState } from "react";
import { getMyDataService } from "../services";
import { AuthContext } from "../context/AuthContext";

export const useUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { token } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    const loadUser = async () => {
      try {
        const data = await getMyDataService(token);

        setUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, [token]);
  return { user, loading, error, setUser };
};
