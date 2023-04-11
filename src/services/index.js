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
