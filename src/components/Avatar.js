export const Avatar = ({ user }) => {
  return (
    <img
      src={`${process.env.REACT_APP_BACKEND}/avatars/${user.avatar}`}
<<<<<<< HEAD
      style={{ width: 50, height: 50 }}
      alt="avatar "
=======
      style={{ width: 100, height: 100 }}
      alt={`avatar ${user.name} `}
>>>>>>> mariano
    />
  );
};
