import { useState, useContext } from "react";
import { updateMyDataService } from "../services";
import { AuthContext } from "../context/AuthContext";

export const EditUser = ({ user }) => {
  const { token } = useContext(AuthContext);
  const [newUserName, setNewUserName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target.value);
    try {
      const updatedUser = await updateMyDataService(token, newUserName);
      console.log(updatedUser);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Nuevo nombre de usuario:
        <input
          type="text"
          name="name"
          id="name"
          value={newUserName}
          onChange={(event) => setNewUserName(event.target.value)}
        />
      </label>
      <label htmlFor="email">
        Nuevo email de usuario:
        <input type="text" name="email" id="email" />
      </label>
      <button type="submit">Actualizar</button>
    </form>
  );
};
