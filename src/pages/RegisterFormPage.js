import { useState } from "react";

export const RegisterFormPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();
    const body = {
      email: email,
      password: password,
    };
    console.log(body);
  };

  return (
    <form onSubmit={register}>
      <h2>Register</h2>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" value="Send"></input>
    </form>
  );
};
