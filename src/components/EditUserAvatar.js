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
    <>
      <h1>Avatar</h1>
      <form className="avatar">
        <fieldset>
          <label htmlFor="file">Avatar</label>
          <input type="file" name="avatar" onChange={handleChanged} />
        </fieldset>
        <button onClick={handleUpload}>Subir Avatar</button>
        <div> {result && <p>{result.data}</p>}</div>
      </form>
    </>
  );
};
