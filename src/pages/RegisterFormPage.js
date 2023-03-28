export const RegisterFormPage = () => {
  return (
    <form>
      <h2>Register</h2>
      <fieldset>
        <label htmlFor="text">Name: </label>
        <input type="text" id="text" />
      </fieldset>
      <fieldset>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" />
      </fieldset>
      <fieldset>
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" />
      </fieldset>
      <input type="submit" value="Send"></input>
    </form>
  );
};
