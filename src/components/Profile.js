export const Profile = ({ user }) => {
  return (
    <div>
      <h3>Nombre: {user?.name} </h3>
      <h3>Email: {user?.email} </h3>
    </div>
  );
};

/* export const Profile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUpdate = async () => {
    try {
      const updatedUser = await updateMyDataService(name, email);

      setName(updatedUser.name);
      setEmail(updatedUser.email);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>Nombre: {name}</h3>
      <input type="text" value={name} onChange={handleNameChange} />
      <h3>Email: {email}</h3>
      <input type="email" value={email} onChange={handleEmailChange} />
      <button onClick={handleUpdate}>Actualizar</button>
    </div>
  );
}; */
