import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Avatar } from "../components/Avatar";

export const UserPage = () => {
  const { user } = useContext(AuthContext);
  return (
    <section>
      <h1>AVATAR</h1>
      {user ? <Avatar /> : null}
    </section>
  );
};
