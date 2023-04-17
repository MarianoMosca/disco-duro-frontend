import React from "react";
export const Avatar = ({ user }) => {
  return (
    <img
      src={`${process.env.REACT_APP_BACKEND}/avatars/${user.avatar}`}
      alt={`avatar ${user.name} `}
    />
  );
};
