// Conexión con el backend

export const loginUserServise = async ({ email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/users/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const sendFileSerive = async ({ file }) => {
  let data = new FormData();

  const response = await fetch(`${process.env.REACT_APP_BACKEND}/files`, {
    method: "POST",
    body: data,
  });
  if (!response.ok) {
    throw new Error(data.message);
  }
  console.log(file);
  return file;
};

/* export const getMyUserDataService = async ({ token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/users`, {
    headers: {
      Authorization: token,
    },
  });
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.user;
};
 */
