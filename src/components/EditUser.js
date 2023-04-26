import { useState, useContext } from "react";
import { updateMyDataService } from "../services";
import { AuthContext } from "../context/AuthContext";

export const EditUser = () => {
  const { token, updateUser } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const updated = await updateMyDataService({ name, email }, token);

      if (token) updateUser(updated);

      setName("");
      setEmail("");
    } catch (error) {
      setError(error.message);
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
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre"
          />
        </label>

        <label htmlFor="email">
          Nuevo email de usuario:
          <input
            className="edit-user"
            type="email"
            required
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </label>
        <button className="actualizar-button" type="submit">
          Actualizar
        </button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};
