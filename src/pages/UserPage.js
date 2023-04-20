import { Avatar } from "../components/Avatar";
import { EditUserAvatar } from "../components/EditUserAvatar";

import { Profile } from "../components/Profile";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { EditUser } from "../components/EditUser";

export const UserPage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Mi perfil</h1>
      <Profile user={user} />
      <EditUser />
      {user ? <Avatar user={user} /> : null}
      <EditUserAvatar />
    </div>
  );
};
