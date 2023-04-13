import { Avatar } from "../components/Avatar";
import { EditUserAvatar } from "../components/EditUserAvatar";

import { Profile } from "../components/Profile";
import { EditUser } from "../components/EditUser";
import { useUser } from "../hooks/useUser";

export const UserPage = () => {
  const { user, setUser } = useUser();

  const handleAvatarUpload = (url) => {
    setUser({ ...user, avatar: url });
  };
  console.log("user", user);
  return (
    <div>
      <h2>Mi perfil</h2>
      <Profile />
      <EditUser />
      {user ? <Avatar user={user} /> : null}
      <EditUserAvatar
        handleAvatarUpload={handleAvatarUpload}
        setUser={setUser}
      />
    </div>
  );
};
