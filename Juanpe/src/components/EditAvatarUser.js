import React, { useState } from "react";

const EditAvatarForm = ({ currentAvatar, updateAvatar, setEditing }) => {
  const [avatar, setAvatar] = useState(currentAvatar);

  const handleInputChange = (event) => {
    const file = event.target.files[0];
    setAvatar(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateAvatar(avatar);
    setEditing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Avatar:</label>
      <input type="file" accept="image/*" onChange={handleInputChange} />
      <button>Update avatar</button>
      <button onClick={() => setEditing(false)}>Cancel</button>
    </form>
  );
};

export default EditAvatarForm;

// Este componente acepta tres props: currentAvatar (el avatar actual del usuario), updateAvatar (una función que actualiza el avatar del usuario) y setEditing (una función que establece si se está editando el avatar actual o no).

// El estado inicial del componente se establece en el avatar actual. Cuando se selecciona un archivo mediante el input de tipo file, se actualiza el estado del avatar mediante la función handleInputChange.

// Cuando se envía el formulario, se llama a la función handleSubmit que llama a updateAvatar con el archivo seleccionado. Luego se llama a setEditing(false) para salir del modo de edición.

// El botón "Cancelar" simplemente llama a setEditing(false) para salir del modo de edición sin guardar los cambios.
