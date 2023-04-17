import { Avatar } from "../components/Avatar";
import { EditUserAvatar } from "../components/EditUserAvatar";

import { Profile } from "../components/Profile";
import { EditUser } from "../components/EditUser";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const UserPage = () => {
  const { user } = useContext(AuthContext);

  console.log("user", user);
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
