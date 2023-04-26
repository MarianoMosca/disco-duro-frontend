import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUserService } from "../services";

import "./css/registerFormPage.css";

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
    <section className="registerPage">
      <h1 className="descripcion">
        En esta web podrás registrarte y acceder a tu espacio personal donde
        subir tus ficheros
      </h1>
      <form onSubmit={handleForm}>
        <img src="./logoConFondo.jpg" alt="logo drive boss"></img>
        <h1>Registro de usuario</h1>
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
        <button>Registro</button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};
