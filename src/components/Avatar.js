export const Avatar = ({ user }) => {
  return (
    <img
      src={`${process.env.REACT_APP_BACKEND}/avatars/${user.avatar}`}
      style={{ width: 50, height: 50 }}
      alt="avatar "
    />
  );
};
