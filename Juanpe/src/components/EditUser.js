import React, { useState } from "react";

const EditUserForm = ({ currentUser, updateUser, setEditing }) => {
  const [user, setUser] = useState(currentUser);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser(user.id, user);
    setEditing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username:</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button>Update user</button>
      <button onClick={() => setEditing(false)}>Cancel</button>
    </form>
  );
};

export default EditUserForm;

// Este componente acepta tres props: currentUser (el usuario que se va a editar), updateUser (una función que actualiza el usuario) y setEditing (una función que establece si se está editando el usuario actual o no).

// El estado inicial del componente se establece en el usuario actual. Cuando se cambia algún valor de entrada, se actualiza el estado del usuario mediante la función handleInputChange.

// Cuando se envía el formulario, se llama a la función handleSubmit que llama a updateUser con el id y los datos actualizados del usuario. Luego se llama a setEditing(false) para salir del modo de edición.

// El botón "Cancelar" simplemente llama a setEditing(false) para salir del modo de edición sin guardar los cambios.
