export const RegisterFormPage = () => {
  return (
    <form>
      <h2>Register</h2>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" />
      <input type="submit" value="Send"></input>
    </form>
  );
};
