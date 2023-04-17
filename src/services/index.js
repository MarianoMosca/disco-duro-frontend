export const getAllFilesService = async (token) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/files`, {
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();
  //console.log(json);

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};
// export const getUserFilesService = async (id, token) => {
//   const response = await fetch(`${process.env.REACT_APP_BACKEND}/files/${id}`, {
//     headers: {
//       Authorization: token,
//     },
//   });
//   const json = await response.json();

//   if (!response.ok) {
//     throw new Error(json.message);
//   }

//   return json.data;
// };

export const registerUserService = async ({ name, email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/users`, {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const loginUserService = async ({ email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/users/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  console.log(json.data.token);
  return json.data.token;
};

export const getMyDataService = async ({ token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/users`, {
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();
  //comprobado ok.
  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.user;
};

export const sendFileService = async ({ data, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/files`, {
    method: "POST",
    body: data,
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};
export const sendFolderService = async ({ data, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/folders`, {
    method: "POST",
    body: data,
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();
  console.log(json);
  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};
export const getUserDataService = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/users/${id}`);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const deleteFileService = async ({ id, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/files/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const updateAvatarService = async (formData, token) => {
  console.log("Authorization header:", `Bearer ${token}`);
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND}/users/avatar`,
      {
        method: "PUT",
        headers: {
          Authorization: token,
        },
        body: formData,
      }
    );

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error updating avatar:", error);
    throw error;
  }
};

export const updateMyDataService = async (userData, token) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/users`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ userData }),
  });
  if (response.ok) {
    const user = await response.json();
    return user;
  } else {
    throw new Error("Error al actualizar el usuario");
  }
};
