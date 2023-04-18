import { useState, useContext } from "react";
import { updateMyDataService } from "../services";
import { AuthContext } from "../context/AuthContext";

export const EditUser = ({ handleUserUpdate }) => {
  const { token } = useContext(AuthContext);
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = await updateMyDataService({ name, email }, token);

      handleUserUpdate(updatedUser);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="name">
          Nuevo nombre de usuario:
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </fieldset>

      <fieldset>
        <label htmlFor="email">
          Nuevo email de usuario:
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </fieldset>
      <button type="submit">Actualizar</button>
    </form>
  );
};
