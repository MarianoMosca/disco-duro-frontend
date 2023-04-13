import { useState, useContext } from "react";
import { updateUser } from "../services";
import { AuthContext } from "../context/AuthContext";

const EditUser = ({ user }) => {
  const { token } = useContext(AuthContext);
  const [newUserName, setNewUserName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updatedUser = await updateUser(token, newUserName);
      console.log(updatedUser);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nuevo nombre de usuario:
        <input
          type="text"
          value={newUserName}
          onChange={(event) => setNewUserName(event.target.value)}
        />
      </label>
      <button type="submit">Actualizar</button>
    </form>
  );
};

export default EditUser;
