import React, { useState } from "react";

export const RegisterFormPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();
    const body = {
      email: email,
      password: password,
    };
    const res = await fetch(process.env.REAC_API_BACKEND_USERS, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      const bodyRes = await res.json();
    }
  };
  return (
    <form>
      <h1>Register</h1>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={email} />
      </div>
    </form>
  );
};
