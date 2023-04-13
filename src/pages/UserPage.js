import React, { useState } from "react";
import { Avatar } from "../components/Avatar";
import { EditUserAvatar } from "../components/EditUserAvatar";

import { Profile } from "../components/Profile";
import EditUser from "../components/EditUser";
export const UserPage = () => {
  const [avatarUrl, setAvatarUrl] = useState(null);

  const handleAvatarUpload = (url) => {
    setAvatarUrl(url);
  };
  console.log("avatarUrl:", avatarUrl);
  return (
    <div>
      <h2>Mi perfil</h2>
      <Profile />
      <EditUser />
      {avatarUrl && <Avatar user={avatarUrl} />}
      <EditUserAvatar handleAvatarUpload={handleAvatarUpload} />
    </div>
  );
};
