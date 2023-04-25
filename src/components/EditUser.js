import { useState, useContext } from "react";
import { updateMyDataService } from "../services";
import { AuthContext } from "../context/AuthContext";

export const EditUser = () => {
  const { token, updateUser } = useContext(AuthContext);
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updated = await updateMyDataService({ name, email }, token);

      updateUser(updated);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nuevo nombre de usuario:
          <input
            className="edit-user"
            type="text"
            name="name"
            id="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre"
          />
        </label>

        <label htmlFor="email">
          Nuevo email de usuario:
          <input
            className="edit-user"
            type="text"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </label>
        <button className="actualizar-button" type="submit">
          Actualizar
        </button>
      </form>
    </section>
  );
};
