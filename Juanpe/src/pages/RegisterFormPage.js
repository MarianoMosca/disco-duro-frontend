import { useState } from "react";
import { registerUserService } from "..";

export const RegisterFormPage = () => {
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    setError("");
    if (pass1 !== pass2) {
      setError("passwords do not match");
      return;
    }
    try {
      await registerUserService({ email, password: pass1 });

      //Ir a login
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section>
      <h2>Register</h2>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="pass1">Password</label>
          <input
            type="password"
            id="pass1"
            name="password"
            required
            onChange={(e) => setPass1(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="pass2">Repeat password</label>
          <input
            type="password"
            id="pass2"
            name="password"
            required
            onChange={(e) => setPass2(e.target.value)}
          />
        </fieldset>
        <button>Register</button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};
