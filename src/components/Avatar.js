export const Avatar = ({ user }) => {
  return (
    <img
      src={`${process.env.REACT_APP_BACKEND}/avatars/${user.avatar}`}
      style={{ width: 120, height: 120 }}
      alt={`avatar ${user.name} `}
    />
  );
};
