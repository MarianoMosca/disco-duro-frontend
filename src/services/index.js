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

export const getFolderFilesService = async (idFolder, token) => {
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

  return json.data.token;
};

export const getMyDataService = async (token) => {
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

// export const getUserDataService = async (id, token) => {
//   const response = await fetch(`${process.env.REACT_APP_BACKEND}/users`, {
//     headers: {
//       Authorization: token,
//     },
//   });

//   const json = await response.json();
//   console.log(json);
//   if (!response.ok) {
//     throw new Error(json.message);
//   }

//   return json.data;
// };
export const downloadFileService = async ({ token, id }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/download/${id}`,
    {
      headers: {
        Authorization: token,
      },
    }
  );
  const blob = await response.blob();

  if (!response.ok) {
    throw new Error("Error al descargar el fichero");
  }

  return blob;
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
export const sendFolderService = async ({ data, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/folders`, {
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

export const getAllFoldersService = async (token) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/folders`, {
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
export const sendFileInFolderService = async ({ id, data, token }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/folders/:idFolders`,
    {
      method: "POST",
      body: data,
      headers: {
        Authorization: token,
      },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};
export const getFolderDataService = async (token, id) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/folders/${id}`,
    {
      headers: {
        Authorization: token,
      },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

// export const sendAvatarService = async ({ data, token }) => {
//   const response = await fetch(
//     `${process.env.REACT_APP_BACKEND}/users/avatar`,
//     {
//       method: "POST",
//       body: data,
//       headers: {
//         Authorization: token,
//       },
//     }
//   );

//   const json = await response.json();

//   if (!response.ok) {
//     throw new Error(json.message);
//   }

//   return json.data;
// };
// export const sendAvatarService = async ({ avatar, token }) => {
//   const formData = new FormData();
//   formData.append("avatar", avatar);
//   const response = await fetch(
//     `${process.env.REACT_APP_BACKEND}/users/avatar`,
//     {
//       method: "PUT",

//       headers: {
//         Authorization: token,
//       },
//       body: formData,
//     }
//   );
//   const json = await response.json();
//   if (!response.ok) {
//     throw new Error(json.message);
//   }

//   return json.data;
// };
export const updateAvatarService = async (formData, token) => {
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

    return data;
  } catch (error) {
    console.error("error updating avatar:", error);
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
