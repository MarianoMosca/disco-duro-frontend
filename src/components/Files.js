import React, { useState } from "react";
import { newFileService } from "../services";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
export const NewFiles = () => {
  const [file, setFile] = useState([]);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [token] = useContext(AuthContext);

  const handleFile = async (e) => {
    e.preventDefault();

    try {
      setSending(true);

      const data = new FormData(e.target);
      data.append("file", setFile);
      const loadFile = await newFileService({ data, token });
      setFile(loadFile);
    } catch (error) {
      setError(error.message);
    } finally {
      setSending(false);
    }
  };
  return (
    <form onSubmit={handleFile}>
      <fieldset>
        <label htmlFor="file">
          <input type="file" id="file" name="file" required />
          <input type="submit" value="Send" />
        </label>
      </fieldset>
      {sending ? <p>Loading</p> : null}
      {error ? <p>{error}</p> : null}
    </form>
  );
};
