import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { loginUserService } from "../services";

import "./css/loginPage.css";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { token, login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (token) navigate("/homepage");
  }, [token, navigate]);

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const token = await loginUserService({ email, password });

      login(token);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section className="loginPage">
      <form onSubmit={handleForm}>
        <h1>Login</h1>
        <img src="./logoConFondo.jpg" alt="logo drive boss"></img>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Escriba su email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="pass">Password</label>
        <input
          type="password"
          name="pass"
          id="pass"
          placeholder="Escriba su contraseña"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Login</button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};
