export const Avatar = ({ user }) => {
  return (
    <img
      src={`${process.env.REACT_APP_BACKEND}/avatars/${user.avatar}`}
      style={{ width: 100, height: 100 }}
      alt="avatar"
    />
  );
};
