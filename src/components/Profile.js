export const Profile = ({ user }) => {
  return (
    <div>
      <h3>Nombre: {user?.name} </h3>
      <h3>Email: {user?.email} </h3>
    </div>
  );
};
