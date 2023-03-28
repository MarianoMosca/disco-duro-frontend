import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { loginUserServise } from "../services";

export const LoginFormPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, SetError] = useState("");
  const [, setToken] = useContext(AuthContext);

  const handleForm = async (e) => {
    e.preventDefault();
    SetError("");
    try {
      const data = await loginUserServise({ email, password });
      setToken(data);
    } catch (error) {
      SetError(error.message);
    }
  };
  return (
    <section>
      <h2>Login</h2>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>
        <input type="submit" value="Send"></input>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};
