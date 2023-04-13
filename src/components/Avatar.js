import React from "react";
export const Avatar = ({ user }) => {
  return <img src={user.avatar} alt={`${user.name} avatar`} />;
};
