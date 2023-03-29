import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { sendFileSerive } from "../services";

export const HomePage = () => {
  const [file, setFile] = useState([]);
  const [error, setError] = useState("");
  const [, setToken] = useContext(AuthContext);

  /*   const handleFile = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await sendFileSerive({ file });
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  }; */
  return (
    <form>
      <fieldset>
        <label htmlFor="file">
          <input
            type="file"
            id="file"
            name="file"
            onChange={(e) => setFile(e.target.value)}
          />
          <input type="submit" value="Send" />
        </label>
      </fieldset>
      {error ? <p>Error al subir el fichero</p> : null}
    </form>
  );
};
