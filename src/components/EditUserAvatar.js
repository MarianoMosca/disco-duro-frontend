import React, { useContext, useState } from "react";
import { updateAvatarService } from "../services";

import { AuthContext } from "../context/AuthContext";

/* export const EditUserAvatar = ({ handleAvatarUpload, setUser }) => {
  const { token, user } = useContext(AuthContext);
  const [userAvatar, setUserAvatar] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
}; */

export const EditUserAvatar = () => {
  const [avatar, setAvatar] = useState();
  const [result, setResult] = useState(null);
  const { token, updateAvatar } = useContext(AuthContext);
  // const [previewUrl, setPreviewUrl] = useState(null);
  const handleChanged = (e) => {
    setResult(null);
    setAvatar(e.target.files[0]);
    console.log(e.target.files[0]);
    /* setPreviewUrl(URL.createObjetctURL(e.target.files[0])); */
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
      //cambiar esto por algo que aparezca en pantalla
    }
  };
  return (
    <>
      <h1>Avatar</h1>
      <form className="avatar">
        <fieldset>
          <label htmlFor="file">Avatar</label>
          <input type="file" name="avatar" onChange={handleChanged} />
          {/*  {previewUrl && (
            <div>
              <img src={previewUrl} alt="preview" style={{ width: "100px " }} />
            </div>
          )} */}
        </fieldset>
        <button onClick={handleUpload}>Subir Avatar</button>
        <div> {result && <p>{result.data}</p>}</div>
      </form>
    </>
  );
};
