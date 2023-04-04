import { useContext } from "react";
import { NewFiles } from "../components/Files";
import { AuthContext } from "../context/AuthProvider";

export const HomePage = () => {
  const [, user] = useContext(AuthContext);
  return <>{user ? <NewFiles /> : null}</>;
};
