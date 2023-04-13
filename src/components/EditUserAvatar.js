import React, { useContext, useState } from "react";
import { updateAvatarService } from "../services";

import { AuthContext } from "../context/AuthContext";
import { useUser } from "../hooks/useUser";

export const EditUserAvatar = ({ handleAvatarUpload, setUser }) => {
  const { token } = useContext(AuthContext);
  const [userAvatar, setUserAvatar] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useUser();
  const handleForm = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("avatar", userAvatar);
      const avatar = await updateAvatarService(formData, token);

      handleAvatarUpload(avatar.url);
      setUser({ ...user, avatar: avatar.url });
      // llama la función handleAvatarUpload y pasa la nueva URL del avatar
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
        {loading ? <p>Cargando</p> : null}
      </form>
    </>
  );
};
