import React, { useContext, useState } from "react";
import { updateAvatarService } from "../services";

import { AuthContext } from "../context/AuthContext";

export const EditUserAvatar = () => {
  const [avatar, setAvatar] = useState();
  const [result, setResult] = useState(null);
  const { token, updateAvatar } = useContext(AuthContext);
  const handleChanged = (e) => {
    setResult(null);
    setAvatar(e.target.files[0]);
  };
  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("avatar", avatar);

      const response = await updateAvatarService(formData, token);
      updateAvatar(response.filename);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <section className="avatar">
      <form>
        <section className="botones-avatar-archivo">
          <label className="subir-archivo-label" htmlFor="file">
            <p className="seleccion-avatar">Selecciona Avatar</p>
          </label>
          <input
            id="file"
            className="subir-archivo"
            type="file"
            name="avatar"
            onChange={handleChanged}
          />
          <button className="subir-avatar" onClick={handleUpload}>
            Subir Avatar
          </button>
        </section>
        <div> {result && <p>{result.data}</p>}</div>
      </form>
    </section>
  );
};
