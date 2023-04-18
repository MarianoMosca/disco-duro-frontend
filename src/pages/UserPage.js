import { Avatar } from "../components/Avatar";
import { EditUserAvatar } from "../components/EditUserAvatar";

import { Profile } from "../components/Profile";

import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { EditUser } from "../components/EditUser";

export const UserPage = () => {
  const { user } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState(user);

  const handleUserUpdate = (updatedUser) => {
    setCurrentUser(updatedUser);
  };

  return (
    <div>
      <h1>Mi perfil</h1>
      <Profile user={currentUser} />
      <EditUser handleUserUpdate={handleUserUpdate} />
      {user ? <Avatar user={user} /> : null}
      <EditUserAvatar />
    </div>
  );
};
