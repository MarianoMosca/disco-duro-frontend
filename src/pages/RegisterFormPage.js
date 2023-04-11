import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUserService } from "../services";

export const RegisterFormPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    if (pass1 !== pass2) {
      setError("Contraseñas no coinciden");
      return;
    }

    try {
      await registerUserService({ name, email, password: pass1 });
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section>
      <h1>Register</h1>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="name">Nombre</label>
          <input
            type="name"
            id="name"
            name="name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            placeholder="Escriba su nombre"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Escriba su email"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="pass1">Contraseña</label>
          <input
            type="password"
            id="pass1"
            name="pass1"
            value={pass1}
            required
            onChange={(e) => setPass1(e.target.value)}
            placeholder="Escriba su contraseña"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="pass2">Repita contraseña</label>
          <input
            type="password"
            id="pass2"
            name="pass2"
            value={pass2}
            required
            onChange={(e) => setPass2(e.target.value)}
            placeholder="Repita su contraseña"
          />
        </fieldset>
        <button>Registro</button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};
