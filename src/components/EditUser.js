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

/* export const EditUser = ({ setUser }) => {
  const { token } = useContext(AuthContext);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const updatedUser = await updateMyDataService(userData, token);
      setUser(updatedUser); // Actualiza el usuario en la app
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <h2>Editar perfil</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          id="name"
          defaultValue={user.name}
          onChange={(e) =>
            setUserData({ ...userData, [e.target]: e.target.value })
          }
        />

        <button>Guardar</button>

        {error ? <p>{error}</p> : null}
        {loading ? <p>Cargando</p> : null}
      </form>
    </>
  );
};
 */
