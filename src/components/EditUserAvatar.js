import React, { useContext, useState } from "react";
import { updateAvatarService } from "../services";

import { AuthContext } from "../context/AuthContext";
import { useUser } from "../hooks/useUser";

export const EditUserAvatar = ({ handleAvatarUpload }) => {
  const { token } = useContext(AuthContext);
  const [userAvatar, setUserAvatar] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = new FormData(e.target);
      const avatar = await updateAvatarService(data, token);
      handleAvatarUpload(avatar); // llama la función handleAvatarUpload y pasa la nueva URL del avatar
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <h1>Añadir un fichero</h1>
      <form className="avatar" onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="file">Avatar</label>
          <input
            type="file"
            name="avatar"
            id="avatar"
            onChange={(e) => setUserAvatar(e.target.files[0])}
          />
        </fieldset>

        <button>Subir Avatar</button>

        {error ? <p>{error}</p> : null}
        {loading ? <p>Cargando fichero...</p> : null}
      </form>
    </>
  );
};
