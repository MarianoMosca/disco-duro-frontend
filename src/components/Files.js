import React, { useState } from "react";
import { newFileService } from "../services";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
export const Files = () => {
  const [file, setFile] = useState([]);
  const [error, setError] = useState("");
  const [token] = useContext(AuthContext);

  const handleFile = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const dataFile = await newFileService({ file, token });
      setFile(dataFile);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <form onSubmit={handleFile}>
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
      {error}
    </form>
  );
};
